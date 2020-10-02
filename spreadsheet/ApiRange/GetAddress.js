builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
Worksheet.GetRange("B1").SetValue("2");
var Address = Worksheet.GetRange("A1").GetAddress(true, true, 'xlA1', false);
Worksheet.GetRange("A3").SetValue("Address: ");
Worksheet.GetRange("B3").SetValue(Address);
builder.SaveFile("xlsx", "GetAddress.xlsx");
builder.CloseFile();
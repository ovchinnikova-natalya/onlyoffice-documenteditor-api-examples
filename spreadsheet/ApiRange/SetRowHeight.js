builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
Worksheet.GetRange("B1").SetValue("2");
Worksheet.GetRange("C1").SetValue("3");
var Range = Worksheet.GetRange("A1:C1").SetRowHeight(40);
builder.SaveFile("xlsx", "SetRowHeight.xlsx");
builder.CloseFile();
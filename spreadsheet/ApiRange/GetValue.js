builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
var Value = Worksheet.GetRange("A1").GetValue();
Worksheet.GetRange("A3").SetValue("Value: ");
Worksheet.GetRange("B3").SetValue(Value);
builder.SaveFile("xlsx", "GetValue.xlsx");
builder.CloseFile();
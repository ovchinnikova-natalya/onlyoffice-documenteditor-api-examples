builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
Worksheet.GetRange("A2").SetValue("2");
Worksheet.GetRange("A3").SetValue("3");
var Range = Worksheet.GetRange("A1:A3").SetColumnWidth(20);
builder.SaveFile("xlsx", "SetColumnWidth.xlsx");
builder.CloseFile();
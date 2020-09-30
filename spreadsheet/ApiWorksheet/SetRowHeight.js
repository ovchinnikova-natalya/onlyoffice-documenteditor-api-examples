builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
Worksheet.GetRange("B1").SetValue("2");
Worksheet.GetRange("C1").SetValue("3");
Worksheet.SetRowHeight(0, 30);
builder.SaveFile("xlsx", "SetRowHeight.xlsx");
builder.CloseFile();
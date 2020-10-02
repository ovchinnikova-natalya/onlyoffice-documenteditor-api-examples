builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Height = Worksheet.GetRange("A1").GetRowHeight();
Worksheet.GetRange("A1").SetValue("Height: ");
Worksheet.GetRange("B1").SetValue(Height);
builder.SaveFile("xlsx", "GetRowHeight.xlsx");
builder.CloseFile();
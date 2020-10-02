builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Width = Worksheet.GetRange("A1").GetColumnWidth();
Worksheet.GetRange("A1").SetValue("Width: ");
Worksheet.GetRange("B1").SetValue(Width);
builder.SaveFile("xlsx", "GetColumnWidth.xlsx");
builder.CloseFile();
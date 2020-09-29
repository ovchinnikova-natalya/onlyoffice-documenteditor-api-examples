builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
var Range = Worksheet.GetRange("A1");
var Width = Range.GetColumnWidth();
Worksheet.GetRange("A3").SetValue("Width: ");
Worksheet.GetRange("B3").SetValue(Width);
builder.SaveFile("xlsx", "GetColumnWidth.xlsx");
builder.CloseFile();
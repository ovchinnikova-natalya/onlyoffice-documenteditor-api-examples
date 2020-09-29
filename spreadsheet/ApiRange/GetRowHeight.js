builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
var Range = Worksheet.GetRange("A1");
var Height = Range.GetRowHeight();
Worksheet.GetRange("A3").SetValue("Height: ");
Worksheet.GetRange("B3").SetValue(Height);
builder.SaveFile("xlsx", "GetRowHeight.xlsx");
builder.CloseFile();
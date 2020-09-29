builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("B3").SetValue("This is a sample text with cell offset specified.");
var Range = Worksheet.GetRange("B3");
Range.SetOffset(4 * 36000, 5 * 36000);
builder.SaveFile("xlsx", "SetOffset.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("B3").SetValue("This is a sample text with cell offset specified.");
Worksheet.GetRange("B3").SetOffset(2, 1);
builder.SaveFile("xlsx", "SetOffset.xlsx");
builder.CloseFile();

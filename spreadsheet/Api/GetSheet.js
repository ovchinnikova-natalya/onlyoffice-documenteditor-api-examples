builder.CreateFile("xlsx");
var Worksheet = Api.GetSheet('Sheet1');
Worksheet.GetRange("A1").SetValue("This is a sample text on 'Sheet1'.");
builder.SaveFile("xlsx", "GetSheet.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
Api.Save();
builder.SaveFile("xlsx", "Save.xlsx");
builder.CloseFile();
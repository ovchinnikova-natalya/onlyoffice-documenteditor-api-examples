builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);
builder.SaveFile("xlsx", "ReplaceCurrentImage.xlsx");
builder.CloseFile();
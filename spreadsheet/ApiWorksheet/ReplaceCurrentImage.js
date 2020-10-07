builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);
builder.SaveFile("xlsx", "ReplaceCurrentImage.xlsx");
builder.CloseFile();
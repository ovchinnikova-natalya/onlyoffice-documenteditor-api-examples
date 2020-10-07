builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(oPageOrientation);
builder.SaveFile("xlsx", "GetPageOrientation.xlsx");
builder.CloseFile();
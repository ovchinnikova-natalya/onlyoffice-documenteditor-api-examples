builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPageOrientation("xlPortrait");
var oPageOrientation = oWorksheet.GetPageOrientation();
oWorksheet.GetRange("A1").SetValue("Page orientation: ");
oWorksheet.GetRange("C1").SetValue(oPageOrientation);
builder.SaveFile("xlsx", "SetPageOrientation.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: ");
oWorksheet.GetRange("B1").SetValue(oRightMargin);
builder.SaveFile("xlsx", "GetRightMargin.xlsx");
builder.CloseFile();
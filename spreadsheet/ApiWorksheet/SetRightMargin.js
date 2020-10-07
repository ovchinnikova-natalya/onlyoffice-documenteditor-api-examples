builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetRightMargin(22);
var oRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: ");
oWorksheet.GetRange("B1").SetValue(oRightMargin);
builder.SaveFile("xlsx", "SetRightMargin.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetRightMargin(20.8);
var oRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: " + oRightMargin);
builder.SaveFile("xlsx", "SetRightMargin.xlsx");
builder.CloseFile();
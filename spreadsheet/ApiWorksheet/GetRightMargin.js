builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRightMargin = oWorksheet.GetRightMargin();
oWorksheet.GetRange("A1").SetValue("Right margin: " + oRightMargin);
builder.SaveFile("xlsx", "GetRightMargin.xlsx");
builder.CloseFile();
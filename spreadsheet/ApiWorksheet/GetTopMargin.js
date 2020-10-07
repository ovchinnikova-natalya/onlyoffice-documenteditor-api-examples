builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: ");
oWorksheet.GetRange("B1").SetValue(oTopMargin);
builder.SaveFile("xlsx", "GetTopMargin.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetTopMargin(22);
var oTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: ");
oWorksheet.GetRange("B1").SetValue(oTopMargin);
builder.SaveFile("xlsx", "SetTopMargin.xlsx");
builder.CloseFile();
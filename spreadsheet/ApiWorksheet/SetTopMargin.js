builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetTopMargin(25.1);
var oTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: " + oTopMargin);
builder.SaveFile("xlsx", "SetTopMargin.xlsx");
builder.CloseFile();
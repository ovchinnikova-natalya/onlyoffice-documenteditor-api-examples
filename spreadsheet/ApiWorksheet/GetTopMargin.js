builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: " + oTopMargin);
builder.SaveFile("xlsx", "GetTopMargin.xlsx");
builder.CloseFile();
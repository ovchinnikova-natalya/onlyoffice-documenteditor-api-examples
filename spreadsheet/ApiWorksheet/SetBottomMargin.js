builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetBottomMargin(22);
var oBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: ");
oWorksheet.GetRange("B1").SetValue(oBottomMargin);
builder.SaveFile("xlsx", "SetBottomMargin.xlsx");
builder.CloseFile();
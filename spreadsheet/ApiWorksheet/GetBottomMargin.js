builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: ");
oWorksheet.GetRange("B1").SetValue(oBottomMargin);
builder.SaveFile("xlsx", "GetBottomMargin.xlsx");
builder.CloseFile();
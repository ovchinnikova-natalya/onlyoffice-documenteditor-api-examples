builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetBottomMargin(25.1);
var oBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + oBottomMargin);
builder.SaveFile("xlsx", "SetBottomMargin.xlsx");
builder.CloseFile();
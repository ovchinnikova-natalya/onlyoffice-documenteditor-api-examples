builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: ");
oWorksheet.GetRange("B1").SetValue(oLeftMargin);
builder.SaveFile("xlsx", "GetLeftMargin.xlsx");
builder.CloseFile();
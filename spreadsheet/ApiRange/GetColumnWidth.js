builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oWidth = oWorksheet.GetRange("A1").GetColumnWidth();
oWorksheet.GetRange("A1").SetValue("Width: ");
oWorksheet.GetRange("B1").SetValue(oWidth);
builder.SaveFile("xlsx", "GetColumnWidth.xlsx");
builder.CloseFile();
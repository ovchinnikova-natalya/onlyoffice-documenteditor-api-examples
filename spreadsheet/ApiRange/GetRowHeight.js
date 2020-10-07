builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oHeight = oWorksheet.GetRange("A1").GetRowHeight();
oWorksheet.GetRange("A1").SetValue("Height: ");
oWorksheet.GetRange("B1").SetValue(oHeight);
builder.SaveFile("xlsx", "GetRowHeight.xlsx");
builder.CloseFile();
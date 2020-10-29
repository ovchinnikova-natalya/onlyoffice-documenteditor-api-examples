builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var oRange = oWorksheet.GetRange("A2:B2");
oRange.ForEach("=SUM(A1:B1)");
builder.SaveFile("xlsx", "ForEach.xlsx");
builder.CloseFile();
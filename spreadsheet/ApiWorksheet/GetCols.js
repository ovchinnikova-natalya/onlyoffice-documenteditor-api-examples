builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCols = oWorksheet.GetCols("A1:C1");
oWorksheet.GetRange("A1").SetValue("Cols: ");
oWorksheet.GetRange("B1").SetValue(oCols);
oWorksheet.GetRange("A3").SetValue("We got all the cells on the columns range A1:C1 in variable 'Cols'.");
builder.SaveFile("xlsx", "GetCols.xlsx");
builder.CloseFile();
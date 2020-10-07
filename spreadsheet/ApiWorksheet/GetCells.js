builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCells = oWorksheet.GetCells();
oWorksheet.GetRange("A1").SetValue("Cells: ");
oWorksheet.GetRange("B1").SetValue(oCells);
oWorksheet.GetRange("A3").SetValue("We got all the cells on the worksheet in variable 'Cells'.");
builder.SaveFile("xlsx", "GetCells.xlsx");
builder.CloseFile();
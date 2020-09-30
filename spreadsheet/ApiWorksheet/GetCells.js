builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Cells = Worksheet.GetCells();
Worksheet.GetRange("A1").SetValue("Cells: ");
Worksheet.GetRange("B1").SetValue(Cells);
Worksheet.GetRange("A3").SetValue("We got all the cells on the worksheet in variable 'Cells'.");
builder.SaveFile("xlsx", "GetCells.xlsx");
builder.CloseFile();
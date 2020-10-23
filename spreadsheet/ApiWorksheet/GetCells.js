builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCells = oWorksheet.GetCells();
oCells.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
oWorksheet.GetRange("A3").SetValue("We got all the cells on the worksheet in variable 'Cells'.");
builder.SaveFile("xlsx", "GetCells.xlsx");
builder.CloseFile();
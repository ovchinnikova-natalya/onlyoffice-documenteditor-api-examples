builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintGridlines(true);
oWorksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page.");
builder.SaveFile("xlsx", "SetPrintGridlines.xlsx");
builder.CloseFile();
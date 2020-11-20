builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.SetPrintHeadings(true);
oWorksheet.GetRange("A1").SetValue("Row and column headings will be printed with this page.");
builder.SaveFile("xlsx", "SetPrintHeadings.xlsx");
builder.CloseFile();
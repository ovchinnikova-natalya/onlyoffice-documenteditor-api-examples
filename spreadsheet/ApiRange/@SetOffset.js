builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B3").SetValue("This is a sample text with cell offset specified.");
oWorksheet.GetRange("B3").SetOffset(2, 1);
builder.SaveFile("xlsx", "SetOffset.xlsx");
builder.CloseFile();

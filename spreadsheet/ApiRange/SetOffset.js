builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B3").SetValue("Old Range");
oRange = oWorksheet.GetRange("B3");
oRange.SetOffset(2, 2);
oRange.SetValue("New Range");
builder.SaveFile("xlsx", "SetOffset.xlsx");
builder.CloseFile();

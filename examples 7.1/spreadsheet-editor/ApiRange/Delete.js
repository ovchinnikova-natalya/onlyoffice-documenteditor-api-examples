builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B4").SetValue("1");
oWorksheet.GetRange("C4").SetValue("2");
oWorksheet.GetRange("D4").SetValue("3");
oWorksheet.GetRange("C5").SetValue("5");
oRange = oWorksheet.GetRange("C4");
oRange.Delete("up");
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();
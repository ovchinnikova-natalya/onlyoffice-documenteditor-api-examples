builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange = oWorksheet.GetRows("1:3");
oRange.SetHidden(true);
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
builder.SaveFile("xlsx", "SetHidden.xlsx");
builder.CloseFile();
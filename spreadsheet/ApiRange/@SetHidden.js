builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange = oWorksheet.GetRange("A1:C1");
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
oRange.SetHidden(true);
oWorksheet.GetRange("A3").SetValue("The values in cells A1:C1 are hidden.");
builder.SaveFile("xlsx", "SetHidden.xlsx");
builder.CloseFile();

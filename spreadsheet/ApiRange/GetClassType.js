builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is just a sample text in the cell A1.");
oClassType = oRange.GetClassType();
oWorksheet.GetRange('A3').SetValue("Class type: " + oClassType);
builder.SaveFile("xlsx", "GetClassType.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is a sample text which is copied to the range A3.");
oRange.Copy(oWorksheet.GetRange("A3"));
builder.SaveFile("xlsx", "Copy.xlsx");
builder.CloseFile();
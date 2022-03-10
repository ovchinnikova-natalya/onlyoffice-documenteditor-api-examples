builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is an example of the column width autofit.");
oRange.AutoFit(false, true);
builder.SaveFile("xlsx", "AutoFit.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("text1");
oWorksheet.GetRange("B1").SetValue("text2");
oWorksheet.GetRange("C1").SetValue("text3");
oRange = oWorksheet.GetRange("A1:C1");
oText = oRange.GetText();
oWorksheet.GetRange("A3").SetValue("Text from the cell A1: " + oText);
builder.SaveFile("xlsx", "GetText.xlsx");
builder.CloseFile();
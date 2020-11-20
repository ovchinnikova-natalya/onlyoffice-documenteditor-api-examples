builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oFormat = Api.Format("123456", ["$#,##0"]);
oRange = oWorksheet.GetRange("A1");
oRange.SetValue(oFormat);
oValue2 = oRange.GetValue2();
oWorksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + oValue2);
builder.SaveFile("xlsx", "GetValue2.xlsx");
builder.CloseFile();
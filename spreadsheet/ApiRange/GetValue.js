builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oValue = oWorksheet.GetRange("A1").GetValue();
oWorksheet.GetRange("A3").SetValue("Value: ");
oWorksheet.GetRange("B3").SetValue(oValue);
builder.SaveFile("xlsx", "GetValue.xlsx");
builder.CloseFile();
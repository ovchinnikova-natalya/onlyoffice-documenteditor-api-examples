builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var oAddress = oWorksheet.GetRange("A1").GetAddress(true, true, 'xlA1', false);
oWorksheet.GetRange("A3").SetValue("Address: ");
oWorksheet.GetRange("B3").SetValue(oAddress);
builder.SaveFile("xlsx", "GetAddress.xlsx");
builder.CloseFile();
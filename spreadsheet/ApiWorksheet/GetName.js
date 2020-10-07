builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oName = oWorksheet.GetName();
oWorksheet.GetRange("A1").SetValue("Name: ");
oWorksheet.GetRange("B1").SetValue(oName);
builder.SaveFile("xlsx", "GetName.xlsx");
builder.CloseFile();
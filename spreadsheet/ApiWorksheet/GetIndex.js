builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oIndex = oWorksheet.GetIndex();
oWorksheet.GetRange("A1").SetValue("Index: ");
oWorksheet.GetRange("B1").SetValue(oIndex);
builder.SaveFile("xlsx", "GetIndex.xlsx");
builder.CloseFile();
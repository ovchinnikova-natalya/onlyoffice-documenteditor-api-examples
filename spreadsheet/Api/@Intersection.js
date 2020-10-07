builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange1 = oWorksheet.GetRange("A1:B2");
var oRange2 = oWorksheet.GetRange("A2:B3");
var oRange3 = Api.Intersect(oRange1, oRange2);
oRange3.SetValue("Intersection");
builder.SaveFile("xlsx", "Intersect.xlsx");
builder.CloseFile();
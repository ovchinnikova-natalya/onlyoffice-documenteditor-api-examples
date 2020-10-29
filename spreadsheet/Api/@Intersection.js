builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange1 = oWorksheet.GetRange("A1:C5");
var oRange2 = oWorksheet.GetRange("B2:B4");
var oRange = Api.Intersect(oRange1, oRange2);
oRange.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
builder.SaveFile("xlsx", "GetCells.xlsx");
builder.CloseFile();
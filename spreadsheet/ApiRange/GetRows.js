builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:A3");
var oRows = oRange.GetRows(1, 2);
oRows.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();
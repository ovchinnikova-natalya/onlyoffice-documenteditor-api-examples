builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRows = oWorksheet.GetRows(1);
oRows.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();
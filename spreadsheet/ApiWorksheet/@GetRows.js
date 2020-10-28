builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRows = oWorksheet.GetRows("A1:A3");
oRows.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();
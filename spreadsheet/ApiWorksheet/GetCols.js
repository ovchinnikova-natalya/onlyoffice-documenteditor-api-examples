builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oCols = oWorksheet.GetCols("A1:C1");
oCols.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
oWorksheet.GetRange("A3").SetValue("We got all the cells on the columns range A1:C1 in variable 'Cols'.");
builder.SaveFile("xlsx", "GetCols.xlsx");
builder.CloseFile();
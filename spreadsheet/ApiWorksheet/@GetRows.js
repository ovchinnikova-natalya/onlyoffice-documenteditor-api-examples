builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRows = oWorksheet.GetRows("A1:A3");
oRows.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
oWorksheet.GetRange("A3").SetValue("We got all the cells on the rows range A1:A3 in variable 'Rows'.");
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange1 = oWorksheet.GetRange("A1:C5");
oRange2 = oWorksheet.GetRange("B2:B4");
oRange = Api.Intersect(oRange1, oRange2);
oRange.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
builder.SaveFile("xlsx", "Intersect.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange = Api.GetRange("A1:C1");
oRange.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
oWorksheet.GetRange("A3").SetValue("The color was set to the background of cells A1:C1.");
builder.SaveFile("xlsx", "GetRange.xlsx");
builder.CloseFile();
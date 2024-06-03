builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange = oWorksheet.GetRange("B1:D1");
oRange.SetValue("1");
oRange.Select();
oAreas = oRange.GetAreas();
oItem = oAreas.GetItem(1);
oRange = oWorksheet.GetRange('A5');
oRange.SetValue("The first item from the areas: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange('B5').Paste(oItem);
builder.SaveFile("xlsx", "GetItem.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oUsedRange = oWorksheet.GetUsedRange();
oUsedRange.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
oWorksheet.GetRange("A3").SetValue("We got the used range on the worksheet in variable 'UsedRange'.");
builder.SaveFile("xlsx", "GetUsedRange.xlsx");
builder.CloseFile();
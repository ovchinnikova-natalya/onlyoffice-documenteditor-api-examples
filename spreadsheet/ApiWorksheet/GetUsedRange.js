builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oUsedRange = oWorksheet.GetUsedRange();
oWorksheet.GetRange("A1").SetValue("Used range: ");
oWorksheet.GetRange("B1").SetValue(oUsedRange);
oWorksheet.GetRange("A3").SetValue("We got the used range on the worksheet in variable 'UsedRange'.");
builder.SaveFile("xlsx", "GetUsedRange.xlsx");
builder.CloseFile();
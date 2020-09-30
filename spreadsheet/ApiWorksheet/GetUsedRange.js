builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var UsedRange = Worksheet.GetUsedRange();
Worksheet.GetRange("A1").SetValue("Used range: ");
Worksheet.GetRange("B1").SetValue(UsedRange);
Worksheet.GetRange("A3").SetValue("We got the used range on the worksheet in variable 'UsedRange'.");
builder.SaveFile("xlsx", "GetUsedRange.xlsx");
builder.CloseFile();
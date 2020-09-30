builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.SetPageOrientation("xlPortrait");
var PageOrientation = Worksheet.GetPageOrientation();
Worksheet.GetRange("A1").SetValue("Page orientation: ");
Worksheet.GetRange("C1").SetValue(PageOrientation);
builder.SaveFile("xlsx", "SetPageOrientation.xlsx");
builder.CloseFile();
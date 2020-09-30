builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var PageOrientation = Worksheet.GetPageOrientation();
Worksheet.GetRange("A1").SetValue("Page orientation: ");
Worksheet.GetRange("C1").SetValue(PageOrientation);
builder.SaveFile("xlsx", "GetPageOrientation.xlsx");
builder.CloseFile();
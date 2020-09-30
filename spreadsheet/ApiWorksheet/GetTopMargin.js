builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var TopMargin = Worksheet.GetTopMargin();
Worksheet.GetRange("A1").SetValue("Top margin: ");
Worksheet.GetRange("B1").SetValue(TopMargin);
builder.SaveFile("xlsx", "GetTopMargin.xlsx");
builder.CloseFile();
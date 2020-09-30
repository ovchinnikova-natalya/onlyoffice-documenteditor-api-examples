builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.SetTopMargin(22);
var TopMargin = Worksheet.GetTopMargin();
Worksheet.GetRange("A1").SetValue("Top margin: ");
Worksheet.GetRange("B1").SetValue(TopMargin);
builder.SaveFile("xlsx", "SetTopMargin.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.SetBottomMargin(22);
var BottomMargin = Worksheet.GetBottomMargin();
Worksheet.GetRange("A1").SetValue("Bottom margin: ");
Worksheet.GetRange("B1").SetValue(BottomMargin);
builder.SaveFile("xlsx", "SetBottomMargin.xlsx");
builder.CloseFile();
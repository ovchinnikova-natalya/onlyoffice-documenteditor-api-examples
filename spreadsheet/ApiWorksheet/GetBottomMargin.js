builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var BottomMargin = Worksheet.GetBottomMargin();
Worksheet.GetRange("A1").SetValue("Bottom margin: ");
Worksheet.GetRange("B1").SetValue(BottomMargin);
builder.SaveFile("xlsx", "GetBottomMargin.xlsx");
builder.CloseFile();
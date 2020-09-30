builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var RightMargin = Worksheet.GetRightMargin();
Worksheet.GetRange("A1").SetValue("Right margin: ");
Worksheet.GetRange("B1").SetValue(RightMargin);
builder.SaveFile("xlsx", "GetRightMargin.xlsx");
builder.CloseFile();
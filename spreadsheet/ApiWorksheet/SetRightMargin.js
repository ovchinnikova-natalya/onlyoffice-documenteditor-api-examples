builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.SetRightMargin(22);
var RightMargin = Worksheet.GetRightMargin();
Worksheet.GetRange("A1").SetValue("Right margin: ");
Worksheet.GetRange("B1").SetValue(RightMargin);
builder.SaveFile("xlsx", "SetRightMargin.xlsx");
builder.CloseFile();
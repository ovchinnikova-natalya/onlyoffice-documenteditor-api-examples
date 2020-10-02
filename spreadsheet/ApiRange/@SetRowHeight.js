builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetRowHeight(32);
builder.SaveFile("xlsx", "SetRowHeight.xlsx");
builder.CloseFile();

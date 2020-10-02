builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.SetRowHeight(0, 30);
builder.SaveFile("xlsx", "SetRowHeight.xlsx");
builder.CloseFile();
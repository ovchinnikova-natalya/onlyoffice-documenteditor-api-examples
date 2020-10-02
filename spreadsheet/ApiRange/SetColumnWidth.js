builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetColumnWidth(20);
builder.SaveFile("xlsx", "SetColumnWidth.xlsx");
builder.CloseFile();
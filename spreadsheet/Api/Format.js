builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Format = Api.Format("123456", ["$#,##0"]);
Worksheet.GetRange("A1").SetValue(Format);
builder.SaveFile("xlsx", "Format.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Index = Worksheet.GetIndex();
Worksheet.GetRange("A1").SetValue("Index: ");
Worksheet.GetRange("B1").SetValue(Index);
builder.SaveFile("xlsx", "GetIndex.xlsx");
builder.CloseFile();
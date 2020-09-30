builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var LeftMargin = Worksheet.GetLeftMargin();
Worksheet.GetRange("A1").SetValue("Left margin: ");
Worksheet.GetRange("B1").SetValue(LeftMargin);
builder.SaveFile("xlsx", "GetLeftMargin.xlsx");
builder.CloseFile();
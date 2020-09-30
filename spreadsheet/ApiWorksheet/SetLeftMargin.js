builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.SetLeftMargin(22);
var LeftMargin = Worksheet.GetLeftMargin();
Worksheet.GetRange("A1").SetValue("Left margin: ");
Worksheet.GetRange("B1").SetValue(LeftMargin);
builder.SaveFile("xlsx", "SetLeftMargin.xlsx");
builder.CloseFile();
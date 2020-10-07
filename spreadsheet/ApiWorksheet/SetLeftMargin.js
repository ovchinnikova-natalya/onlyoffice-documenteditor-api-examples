builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetLeftMargin(22);
var oLeftMargin = Worksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: ");
oWorksheet.GetRange("B1").SetValue(oLeftMargin);
builder.SaveFile("xlsx", "SetLeftMargin.xlsx");
builder.CloseFile();
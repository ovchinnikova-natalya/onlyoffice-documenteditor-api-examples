builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetLeftMargin(20.8);
var oLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + oLeftMargin);
builder.SaveFile("xlsx", "SetLeftMargin.xlsx");
builder.CloseFile();
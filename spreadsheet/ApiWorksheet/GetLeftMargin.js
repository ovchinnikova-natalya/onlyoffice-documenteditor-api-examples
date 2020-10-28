builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + oLeftMargin);
builder.SaveFile("xlsx", "GetLeftMargin.xlsx");
builder.CloseFile();
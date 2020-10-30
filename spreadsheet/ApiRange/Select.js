builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C1");
oRange.SetValue("1");
var oSelection = oRange.Select();
oSelection.SetFillColor(Api.CreateColorFromRGB(255, 224, 204));
builder.SaveFile("xlsx", "Select.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
var oVisible = oWorksheet.GetVisible();
oWorksheet.GetRange("A1").SetValue("Visible: ");
oWorksheet.GetRange("B1").SetValue(oVisible);
builder.SaveFile("xlsx", "GetVisible.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.SetVisible(true);
var Visible = Worksheet.GetVisible();
Worksheet.GetRange("A1").SetValue("Visible: ");
Worksheet.GetRange("B1").SetValue(Visible);
builder.SaveFile("xlsx", "GetVisible.xlsx");
builder.CloseFile();
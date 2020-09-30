builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.SetVisible(true);
Worksheet.GetRange("A1").SetValue("The current worksheet is visible.");
builder.SaveFile("xlsx", "SetVisible.xlsx");
builder.CloseFile();
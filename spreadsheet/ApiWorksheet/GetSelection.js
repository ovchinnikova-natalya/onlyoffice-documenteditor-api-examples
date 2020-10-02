builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetSelection().SetValue("selected");
builder.SaveFile("xlsx", "GetSelection.xlsx");
builder.CloseFile();
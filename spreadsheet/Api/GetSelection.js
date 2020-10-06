builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");
builder.SaveFile("xlsx", "GetSelection.xlsx");
builder.CloseFile();
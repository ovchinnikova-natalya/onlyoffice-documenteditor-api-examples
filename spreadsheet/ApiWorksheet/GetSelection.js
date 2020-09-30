builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Range = Worksheet.GetSelection();
Range.SetValue("selected");
builder.SaveFile("xlsx", "GetSelection.xlsx");
builder.CloseFile();
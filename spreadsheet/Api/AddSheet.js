builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Sheet = Api.AddSheet('New sheet');
Worksheet = Api.GetActiveSheet();
builder.SaveFile("xlsx", "AddSheet.xlsx");
builder.CloseFile();

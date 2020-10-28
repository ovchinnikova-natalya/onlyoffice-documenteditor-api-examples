builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oSheet = Api.AddSheet("New sheet");
builder.SaveFile("xlsx", "AddSheet.xlsx");
builder.CloseFile();

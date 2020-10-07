builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oSheet = Api.AddSheet('New sheet');
oWorksheet = Api.GetActiveSheet();
builder.SaveFile("xlsx", "AddSheet.xlsx");
builder.CloseFile();

builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oSheet = Api.AddSheet("New sheet");
builder.SaveFile("xlsx", "AddSheet.xlsx");
builder.CloseFile();

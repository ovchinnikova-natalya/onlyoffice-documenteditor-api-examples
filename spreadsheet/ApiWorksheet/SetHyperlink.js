builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.SetHyperlink("A1", "https://api.onlyoffice.com/docbuilder/basic", "Api ONLYOFFICE", "ONLYOFFICE for developers");
builder.SaveFile("xlsx", "SetHyperlink.xlsx");
builder.CloseFile();
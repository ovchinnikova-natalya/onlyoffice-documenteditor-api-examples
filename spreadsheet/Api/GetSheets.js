builder.CreateFile("xlsx");
oSheet = Api.AddSheet("New sheet");
oWorksheets = Api.GetSheets();
oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("The name of the first sheet: " + oWorksheets[0].GetName());
oWorksheet.GetRange("A2").SetValue("The name of the second sheet: " + oWorksheets[1].GetName());
builder.SaveFile("xlsx", "GetSheets.xlsx");
builder.CloseFile();
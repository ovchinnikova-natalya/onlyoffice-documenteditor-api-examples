builder.CreateFile("xlsx");
Api.AddSheet("New_sheet");
oSheet = Api.GetSheet("New_sheet");
oSheet.SetActive();
oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("The current sheet is active.");
builder.SaveFile("xlsx", "SetActive.xlsx");
builder.CloseFile();
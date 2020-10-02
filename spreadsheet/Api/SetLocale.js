builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Api.SetLocale('en-CA');
Worksheet.GetRange("A1").SetValue("A sample spreadsheet with the language set to English (Canada).");
builder.SaveFile("xlsx", "SetLocale.xlsx");
builder.CloseFile();
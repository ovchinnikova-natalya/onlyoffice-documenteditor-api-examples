builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
Api.SetLocale('en-CA');
oLocale = Api.GetLocale();
oWorksheet.GetRange("A1").SetValue("Locale: " + oLocale);
builder.SaveFile("xlsx", "GetLocale.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Api.SetLocale('en-CA');
Locale = Api.GetLocale();
Worksheet.GetRange("A1").SetValue("Locale: " + Locale);
builder.SaveFile("xlsx", "GetLocale.xlsx");
builder.CloseFile();
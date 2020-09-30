builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
Worksheet.GetRange("B1").SetValue("2");
Worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
Worksheet.GetRange("A3").SetValue("We defined a name 'numbers' for a range of cells A1:B1.");
builder.SaveFile("xlsx", "AddDefName.xlsx");
builder.CloseFile();
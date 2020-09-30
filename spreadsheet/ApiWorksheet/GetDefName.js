builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
Worksheet.GetRange("B1").SetValue("2");
Worksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var DefName = Worksheet.GetDefName("numbers");
Worksheet.GetRange("A3").SetValue("We got an object of the name 'numbers' in variable 'DefName'.");
builder.SaveFile("xlsx", "GetDefName.xlsx");
builder.CloseFile();
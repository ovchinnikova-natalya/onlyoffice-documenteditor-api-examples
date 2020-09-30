builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
Worksheet.GetRange("B1").SetValue("2");
Worksheet.Delete();
Worksheet.GetRange("A3").SetValue("This method just deleted the object 'Worksheet'.");
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Name = Worksheet.GetName();
Worksheet.GetRange("A1").SetValue("Name: ");
Worksheet.GetRange("B1").SetValue(Name);
builder.SaveFile("xlsx", "GetName.xlsx");
builder.CloseFile();
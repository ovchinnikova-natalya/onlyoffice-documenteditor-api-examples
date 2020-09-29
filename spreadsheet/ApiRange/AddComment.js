builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
var Range = Worksheet.GetRange("A1");
Range.AddComment("This is just a number.");
builder.SaveFile("xlsx", "AddComment.xlsx");
builder.CloseFile();
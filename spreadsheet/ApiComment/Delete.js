builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("A1").SetValue("1");
var Range = Worksheet.GetRange("A1");
Range.AddComment("This is just a number.");
var Comment = Range.GetComment();
Comment.Delete();
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();
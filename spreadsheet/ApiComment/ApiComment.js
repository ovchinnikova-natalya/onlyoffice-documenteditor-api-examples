builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
var oComment = oRange.GetComment();
oWorksheet.GetRange("A3").SetValue("Comment: " + oComment.GetText());
builder.SaveFile("xlsx", "AddComment.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
oRange.AddComment("This is just a number.");
var oComments = oWorksheet.GetComments();
oWorksheet.GetRange("A4").SetValue("Comment: " + oComments[0].GetText());
builder.SaveFile("xlsx", "GetComments.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.Delete();
oWorksheet.GetRange("A3").SetValue("This method just deleted the object 'Worksheet'.");
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();
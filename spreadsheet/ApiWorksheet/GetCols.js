builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Cols = Worksheet.GetCols("A1:C1");
Worksheet.GetRange("A1").SetValue("Cols: ");
Worksheet.GetRange("B1").SetValue(Cols);
Worksheet.GetRange("A3").SetValue("We got all the cells on the columns range A1:C1 in variable 'Cols'.");
builder.SaveFile("xlsx", "GetCols.xlsx");
builder.CloseFile();
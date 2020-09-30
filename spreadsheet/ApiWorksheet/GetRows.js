builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Rows = Worksheet.GetRows("A1:A3");
Worksheet.GetRange("A1").SetValue("Rows: ");
Worksheet.GetRange("B1").SetValue(Rows);
Worksheet.GetRange("A3").SetValue("We got all the cells on the rows range A1:A3 in variable 'Rows'.");
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();
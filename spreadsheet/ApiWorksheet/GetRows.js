builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRows = oWorksheet.GetRows("A1:A3");
oWorksheet.GetRange("A1").SetValue("Rows: ");
oWorksheet.GetRange("B1").SetValue(oRows);
oWorksheet.GetRange("A3").SetValue("We got all the cells on the rows range A1:A3 in variable 'Rows'.");
builder.SaveFile("xlsx", "GetRows.xlsx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var ActiveCell = Worksheet.GetActiveCell();
ActiveCell.SetValue("This sample text was placed in an active cell.");
builder.SaveFile("xlsx", "GetActiveCell.xlsx");
builder.CloseFile();
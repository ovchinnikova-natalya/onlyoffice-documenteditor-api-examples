builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oRange = oWorksheet.GetRange("A1");
oRange.SetValue("1");
oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("The comment was added to the cell A1.");
oWorksheet.GetRange("A4").SetValue("Comment: " + oRange.GetComment().GetText());
builder.SaveFile("xlsx", "AddComment.xlsx");
builder.CloseFile();
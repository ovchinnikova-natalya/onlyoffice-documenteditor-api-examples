builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
oRange = oParagraph.GetRange(8, 11);
oRange.SetBold(true);
builder.SaveFile("docx", "GetRange.docx");
builder.CloseFile();
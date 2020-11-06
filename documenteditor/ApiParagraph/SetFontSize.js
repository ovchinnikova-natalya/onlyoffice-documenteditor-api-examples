builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
oParagraph.SetFontSize(24);
builder.SaveFile("docx", "SetFontSize.docx");
builder.CloseFile();
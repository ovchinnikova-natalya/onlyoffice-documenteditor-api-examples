builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample text.");
oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This paragraph was inserted here.");
oParagraph1.InsertParagraph(oParagraph2, "after", true);
builder.SaveFile("docx", "InsertParagraph.docx");
builder.CloseFile();
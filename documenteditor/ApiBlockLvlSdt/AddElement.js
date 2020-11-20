builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();
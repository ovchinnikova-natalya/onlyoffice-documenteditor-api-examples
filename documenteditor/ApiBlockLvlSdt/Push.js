builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.Push(oParagraph);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "Push.docx");
builder.CloseFile();
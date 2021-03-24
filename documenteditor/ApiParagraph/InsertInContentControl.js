builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph inserted into the content control.");
oBlockLvlSdt = oParagraph.InsertInContentControl(1);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "InsertInContentControl.docx");
builder.CloseFile();
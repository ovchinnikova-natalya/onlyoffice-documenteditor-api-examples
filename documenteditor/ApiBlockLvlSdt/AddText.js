builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "AddText.docx");
builder.CloseFile();
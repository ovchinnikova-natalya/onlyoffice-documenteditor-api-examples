builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oRange = oBlockLvlSdt.GetRange(10, 14);
oRange.SetBold(true);
builder.SaveFile("docx", "GetRange.docx");
builder.CloseFile();
builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.SetPlaceholderText("Name");
builder.SaveFile("docx", "SetPlaceholderText.docx");
builder.CloseFile();
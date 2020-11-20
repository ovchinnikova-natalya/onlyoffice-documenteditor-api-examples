builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.AddText("The block text content control is selected.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.Select();
builder.SaveFile("docx", "Select.docx");
builder.CloseFile();
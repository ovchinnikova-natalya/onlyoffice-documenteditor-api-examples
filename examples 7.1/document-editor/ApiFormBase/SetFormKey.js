builder.CreateFile("docx");
oDocument = Api.GetDocument();
aForms = oDocument.GetAllForms();
aForms[0].SetFormKey("Key 1");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Key 1 was set to the first form in this document.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetFormKey.docx");
builder.CloseFile();
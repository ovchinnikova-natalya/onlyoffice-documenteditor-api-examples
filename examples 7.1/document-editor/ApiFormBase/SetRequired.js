builder.CreateFile("docx");
oDocument = Api.GetDocument();
aForms = oDocument.GetAllForms();
aForms[0].SetRequired(true);
bRequired = aForms[0].IsRequired();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first form from this document is required: " + bRequired);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetRequired.docx");
builder.CloseFile();
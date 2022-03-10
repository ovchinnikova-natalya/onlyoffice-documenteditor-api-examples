builder.CreateFile("docx");
oDocument = Api.GetDocument();
aForms = oDocument.GetAllForms();
aForms[0].SetTipText("Enter your first and last name");
sTipText = aForms[0].GetTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form tip text: " + sTipText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetTipText.docx");
builder.CloseFile();
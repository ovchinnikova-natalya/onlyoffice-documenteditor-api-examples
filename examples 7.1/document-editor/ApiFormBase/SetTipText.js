builder.CreateFile("docx");
oDocument = Api.GetDocument();
aForms = oDocument.GetAllForms();
aForms[0].SetTipText("Enter your first and last name");
builder.SaveFile("docx", "SetTipText.docx");
builder.CloseFile();
builder.CreateFile("docx");
oDocument = Api.GetDocument();
aForms = oDocument.GetAllForms();
aForms[0].SetBackgroundColor(255, 255, 0);
builder.SaveFile("docx", "SetBackgroundColor.docx");
builder.CloseFile();
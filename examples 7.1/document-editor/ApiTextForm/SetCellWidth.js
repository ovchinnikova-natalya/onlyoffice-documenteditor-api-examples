builder.CreateFile("docx");
oDocument = Api.GetDocument();
aTextForm = oDocument.GetAllForms();
aTextForm[0].SetComb(true);
aTextForm[0].SetCellWidth(30);
builder.SaveFile("docx", "SetCellWidth.docx");
builder.CloseFile();
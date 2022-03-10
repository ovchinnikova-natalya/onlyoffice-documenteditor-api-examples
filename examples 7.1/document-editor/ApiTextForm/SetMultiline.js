builder.CreateFile("docx");
oDocument = Api.GetDocument();
aTextForm = oDocument.GetAllForms();
aTextForm[0].SetFixedForm(true);
aTextForm[0].SetMultiline(true);
bMultiline = aTextForm[0].IsMultiline();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is multiline: " + bMultiline);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetMultiline.docx");
builder.CloseFile();
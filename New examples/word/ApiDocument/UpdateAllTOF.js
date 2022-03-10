builder.CreateFile("docx");
oDocument = Api.GetDocument();
oDocument.UpdateAllTOF(true);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Apply this script to the document with tables of figures and all of them will be updated.");
builder.SaveFile("docx", "UpdateAllTOF.docx");
builder.CloseFile();
builder.CreateFile("docx");
oDocument = Api.GetDocument();
oDocument.UpdateAllTOC(true);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Apply this script to the document with tables of contents and all of them will be updated.");
builder.SaveFile("docx", "UpdateAllTOC.docx");
builder.CloseFile();
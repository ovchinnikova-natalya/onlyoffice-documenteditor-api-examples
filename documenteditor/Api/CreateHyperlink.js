builder.CreateFile("docx");
oDocument = Api.GetDocument();
oHyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
sType = oHyperlink.GetClassType();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class type of the created object: " + sType);
builder.SaveFile("docx", "CreateHyperlink.docx");
builder.CloseFile();
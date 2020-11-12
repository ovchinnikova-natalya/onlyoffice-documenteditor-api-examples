builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Api Document Builder");
oHyperlink = oParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
oRange = oHyperlink.GetRange(0, 2);
oRange.SetBold(true);
builder.SaveFile("docx", "GetRange .docx");
builder.CloseFile();
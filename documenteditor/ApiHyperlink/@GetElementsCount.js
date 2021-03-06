builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Api Document Builder.");
oRun = Api.CreateRun();
oRun.AddText(" ONLYOFFICE for developers");
oParagraph.AddElement(oRun);
oHyperlink = oParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
oElementsCount = oHyperlink.GetElementsCount();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Number of elements in hyperlink: " + oElementsCount);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetElementsCount.docx");
builder.CloseFile();
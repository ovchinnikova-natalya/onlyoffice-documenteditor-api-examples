builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
oHyperlink = oParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
oHyperlink.SetDisplayedText("Api ONLYOFFICE DocBuilder");
oDisplayedText = oHyperlink.GetDisplayedText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Displayed text: " + oDisplayedText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetDisplayedText.docx");
builder.CloseFile();
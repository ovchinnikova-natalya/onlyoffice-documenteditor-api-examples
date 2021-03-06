builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control with the font size set to 30 and the font weight set to bold.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontSize(30);
oTextPr.SetBold(true);
oInlineLvlSdt.SetTextPr(oTextPr);
builder.SaveFile("docx", "SetTextPr.docx");
builder.CloseFile();
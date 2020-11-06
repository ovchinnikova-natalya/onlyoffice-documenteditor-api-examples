builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oInlineLvlSdt = Api.CreateInlineLvlSdt();
oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun);
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph added to the inline text content control.")
oInlineLvlSdt.AddElement(oParagraph);
oParentInlineLvlSdt = oParagraph.GetParentContentControl();
oParentInlineLvlSdt.GetRange(0).SetBold(true);
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();
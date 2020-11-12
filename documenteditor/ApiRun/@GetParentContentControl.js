builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
oContentControl = oRun.GetParentContentControl();
oClassType = oContentControl.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + oClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();
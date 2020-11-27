builder.CreateFile("docx");
oMacros = Api.pluginMethod_GetMacros();
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText(oMacros);
builder.SaveFile("docx", "GetMacros.docx");
builder.CloseFile();
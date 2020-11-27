builder.CreateFile("docx");
Api.pluginMethod_PasteText("ONLYOFFICE Document Builder");
builder.SaveFile("docx", "PasteText.docx");
builder.CloseFile();
builder.CreateFile("docx");
Api.pluginMethod_InputText("ONLYOFFICE Document Builder");
Api.pluginMethod_InputText("ONLYOFFICE for developers. The original text was replaced with a new text.","ONLYOFFICE Document Builder");
builder.SaveFile("docx", "InputText.docx");
builder.CloseFile();
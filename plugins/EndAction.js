builder.CreateFile("docx");
Api.pluginMethod_EndAction(0, "The operation is completed.");
builder.SaveFile("docx", "EndAction.docx");
builder.CloseFile();
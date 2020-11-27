builder.CreateFile("docx");
Api.pluginMethod_OnEncryption({"password": "12345", "hash": "sha", "docinfo": "doc"});
builder.SaveFile("docx", "OnEncryption.docx");
builder.CloseFile();
builder.CreateFile("docx");
Api.pluginMethod_PasteHtml("<li>User 1 makes changes to the opened document.</li><li>The <b>document editor</b> sends changes made by user 1 to the <b>document editing service</b>.</li>");
builder.SaveFile("docx", "PasteHtml.docx");
builder.CloseFile();
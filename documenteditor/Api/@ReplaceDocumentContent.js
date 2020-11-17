builder.CreateFile("docx");
oDocument = Api.GetDocument();
oLoadMailMergeData = Api.LoadMailMergeData([["Greeting line", "First name", "Last name"], ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
oTemplateDoc = Api.GetMailMergeTemplateDocContent();
Api.MailMerge(true);
Api.ReplaceDocumentContent(oTemplateDoc);
builder.SaveFile("docx", "ReplaceDocumentContent.docx");
builder.CloseFile();
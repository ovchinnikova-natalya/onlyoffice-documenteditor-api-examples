builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
arrField = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < 3; i++) {
    oRun = Api.CreateRun();
    oRun.AddText(arrField[i]);
    oParagraph.AddElement(oRun);
    oRun.WrapInMailMergeField();
    oParagraph.AddText(" ");
}
oParagraph.AddText("!");
Api.LoadMailMergeData([arrField, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
oMailMergeDocContent = Api.GetMailMergeTemplateDocContent();
Api.ReplaceDocumentContent(oMailMergeDocContent);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We got the mail merge template document and replaced the main document with it.");
builder.SaveFile("docx", "GetMailMergeTemplateDocContent.docx");
builder.CloseFile();
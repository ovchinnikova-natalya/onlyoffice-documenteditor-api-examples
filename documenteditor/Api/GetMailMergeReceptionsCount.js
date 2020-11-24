builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
arrField = ["Greeting line", "First name", "Last name"];
for (let i = 0; i < 3; i++) {
    oRun = Api.CreateRun();
    oRun.AddText(arrField[i]);
    oParagraph.AddElement(oRun);
    oRun.WrapInMailMergeField();
    oParagraph.AddLineBreak();
}
Api.LoadMailMergeData([arrField, ["Dear", "John", "Smith"], ["Hello", "Lara", "Davis"]]);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The number of mail merge receptions: " + Api.GetMailMergeReceptionsCount());
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetMailMergeReceptionsCount.docx");
builder.CloseFile();
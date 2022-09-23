builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oElement = oDocument.GetElement(0);
var nElementCount = oElement.GetElementsCount();
if (nElementCount == 1) {
    var oRun = Api.CreateRun();
    oRun.AddText("Add any endnote to this page. To do this, select any word or word phrase in this sentences, open the References tab, click the arrow next to the Footnote icon and choose the Insert Endnote option from the menu. Enter the endnote text. After that, copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
    oElement.AddElement(oRun);
}
else {
    var aEndNotesFirstParagraphs = oDocument.GetEndNotesFirstParagraphs();
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText("For more information on previous sentences see endnote on page ");
    oDocument.Push(oParagraph);
    oParagraph.AddEndnoteCrossRef("pageNum", aEndNotesFirstParagraphs[0]);
}
builder.SaveFile("docx", "AddEndnoteCrossRef.docx");
builder.CloseFile();
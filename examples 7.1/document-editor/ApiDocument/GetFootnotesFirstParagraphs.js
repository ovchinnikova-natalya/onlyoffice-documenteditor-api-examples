builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oElement = oDocument.GetElement(0);
var nElementCount = oElement.GetElementsCount();
if (nElementCount == 1) {
    var oRun = Api.CreateRun();
    oRun.AddText("Add any footnote to this page. To do this, select any word or word phrase in this sentences, open the References tab and click Footnote. Enter the footnote text. After that, copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
    oElement.AddElement(oRun);
}
else {
    var aFootnotesFirstParagraphs = oDocument.GetFootnotesFirstParagraphs();
    aFootnotesFirstParagraphs[0].SetBold(true);
}
builder.SaveFile("docx", "GetFootnotesFirstParagraphs.docx");
builder.CloseFile();
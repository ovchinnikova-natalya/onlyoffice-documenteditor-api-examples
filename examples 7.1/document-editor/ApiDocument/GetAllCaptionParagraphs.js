builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oElement = oDocument.GetElement(0);
var nElementCount = oElement.GetElementsCount();
if (nElementCount == 1) {
    var oRun = Api.CreateRun();
    oRun.AddText("Add a caption to the table. To do this, select the table below, open the References tab, click Caption, change caption parameters in the opened window if you want and click OK. After that, copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
    oElement.AddElement(oRun);
    var oTable = Api.CreateTable(3, 3);
    var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
    oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
    oTable.SetStyle(oTableStyle);
    oTable.SetWidth("percent", 100);
    oDocument.Push(oTable);
}
else {
    var aCaptionParagraphs = oDocument.GetAllCaptionParagraphs("table");
    aCaptionParagraphs[0].SetCaps(true);
}
builder.SaveFile("docx", "GetAllCaptionParagraphs.docx");
builder.CloseFile();
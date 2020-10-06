builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
for (var num = 0; num < 2; ++num) {
  var oInlineLvlSdt = Api.CreateInlineLvlSdt();
  var oRun = Api.CreateRun();
  oRun.AddText("This is an inline text content control № " + (num + 1));
  oInlineLvlSdt.AddElement(oRun, 0);
  oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
}
oParagraph = Api.CreateParagraph();
oParagraph.AddText('These are all content controls: ');
var oContentControls = oDocument.GetAllContentControls();
for (var index = 0; index < oContentControls.length; ++index) {
  oParagraph.AddElement(oContentControls[index]);
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllContentControls.docx");
builder.CloseFile();
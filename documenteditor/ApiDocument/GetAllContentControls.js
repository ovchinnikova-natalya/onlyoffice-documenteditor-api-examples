builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph = Document.GetElement(0);
for (var num = 0; num < 2; ++num) {
  var InlineLvlSdt = Api.CreateInlineLvlSdt();
  var Run = Api.CreateRun();
  Run.AddText("This is an inline text content control № " + (num + 1));
  InlineLvlSdt.AddElement(Run, 0);
  Paragraph.AddInlineLvlSdt(InlineLvlSdt);
}
Paragraph = Api.CreateParagraph();
Paragraph.AddText('These are all content controls: ');
var ContentControls = Document.GetAllContentControls();
for (var index = 0; index < ContentControls.length; ++index) {
  Paragraph.AddElement(ContentControls[index]);
}
Document.Push(Paragraph);
builder.SaveFile("docx", "GetAllContentControls.docx");
builder.CloseFile();
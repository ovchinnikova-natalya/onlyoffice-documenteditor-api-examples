builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph = Document.GetElement(0);
Paragraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
Document.SearchAndReplace(Paragraph, 'first', 'second');
builder.SaveFile("docx", "SearchAndReplace.docx");
builder.CloseFile();
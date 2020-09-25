builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph = Document.GetElement(0);
Paragraph = Api.CreateParagraph();
Paragraph.AddText("This is a sample text. It was inserted here.");
Document.InsertContent([Paragraph]);
builder.SaveFile("docx", "InsertContent.docx");
builder.CloseFile();
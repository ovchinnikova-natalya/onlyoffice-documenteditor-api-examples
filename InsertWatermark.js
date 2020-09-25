builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph = Document.GetElement(0);
Paragraph.AddText("This is just a sample text.");
Document.InsertWatermark("Watermark");
builder.SaveFile("docx", "InsertWatermark.docx");
builder.CloseFile();
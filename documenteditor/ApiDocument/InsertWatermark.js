builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph = Document.GetElement(0);
Paragraph.AddText("A watermark was inserted into this document.");
Document.InsertWatermark("Watermark");
builder.SaveFile("docx", "InsertWatermark.docx");
builder.CloseFile();
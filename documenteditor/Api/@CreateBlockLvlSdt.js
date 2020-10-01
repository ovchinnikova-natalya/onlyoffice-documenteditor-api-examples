builder.CreateFile("docx");
var Document = Api.GetDocument();
var BlockLvlSdt = Api.CreateBlockLvlSdt();
var Paragraph = Api.CreateParagraph();
Paragraph.AddText("This is a block text content control.");
BlockLvlSdt.AddElement(Paragraph, 0);
Document.AddElement(BlockLvlSdt);
builder.SaveFile("docx", "CreateBlockLvlSdt.docx");
builder.CloseFile();

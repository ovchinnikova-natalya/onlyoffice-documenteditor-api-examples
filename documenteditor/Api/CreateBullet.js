builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph = Document.GetElement(0);
var Bullet = Api.CreateBullet("-");
Paragraph.SetBullet(Bullet);
Paragraph.AddText("This is an example of the bulleted paragraph.");
builder.SaveFile("docx", "CreateBullet.docx");
builder.CloseFile();

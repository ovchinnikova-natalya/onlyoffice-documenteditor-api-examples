builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph, oParaPr;
var oMyStyle = oDocument.CreateStyle("My document style");
oParaPr = oMyStyle.GetParaPr();
var Bullet = Api.CreateBullet("-");
oParaPr.SetBullet(Bullet);
oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is a sample text.");
builder.SaveFile("docx", "SetBullet.docx");
builder.CloseFile();
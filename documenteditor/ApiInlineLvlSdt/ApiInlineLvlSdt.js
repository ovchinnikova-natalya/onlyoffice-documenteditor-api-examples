builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
var changeRun = oInlineLvlSdt.GetElement(0);
changeRun.SetBold(true);
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.SetAlias("№1");
var oAlias = oInlineLvlSdt.GetAlias();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Alias: " + oAlias);
oDocument.Push(oParagraph);
oInlineLvlSdt.SetLabel("2147483647");
var oLabel = oInlineLvlSdt.GetLabel();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Label: " + oLabel);
oDocument.Push(oParagraph);
oInlineLvlSdt.SetTag("This is a tag");
var oTag = oInlineLvlSdt.GetTag();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Tag: " + oTag);
oDocument.Push(oParagraph);
oInlineLvlSdt.SetLock("contentLocked");
var oLock = oInlineLvlSdt.GetLock();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Lock type: " + oLock);
oDocument.Push(oParagraph);
var oClassType = oInlineLvlSdt.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + oClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ApiInlineLvlSdt.docx");
builder.CloseFile();
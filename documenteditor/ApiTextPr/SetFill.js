builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255));
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFill(oFill);
oParagraph.AddText("This is a text run with the font color set to blue.");
builder.SaveFile("docx", "SetFill.docx");
builder.CloseFile();
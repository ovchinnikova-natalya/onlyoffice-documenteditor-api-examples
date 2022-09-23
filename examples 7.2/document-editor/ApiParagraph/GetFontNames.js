builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.SetFontFamily("Consolas");
oParagraph.AddText("This is just a sample paragraph.");
var aFontNames = oParagraph.GetFontNames();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Paragraph font names: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aFontNames.length; i++ ){
    oParagraph.AddText(aFontNames[i]);
    oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetFontNames.docx");
builder.CloseFile();
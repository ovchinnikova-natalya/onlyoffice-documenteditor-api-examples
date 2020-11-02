builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph;
var oNumbering = Api.CreateNumbering("ArabicParenR");
var oNumLvl;
for (var nLvl = 0; nLvl < 2; ++nLvl) {
  oNumLvl = oNumbering.GetLevel(nLvl);
  oParagraph = Api.CreateParagraph();
  oParagraph.AddText("This is an example of the bulleted paragraph № " + (nLvl + 1));
  oParagraph.SetNumbering(oNumLvl);
  oDocument.Push(oParagraph);
}
var oClassType = oNumbering.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + oClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
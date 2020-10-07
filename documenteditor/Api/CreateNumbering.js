builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph;
var oNumbering = oDocument.CreateNumbering("bullet");
var oNumLvl;
for (var nLvl = 0; nLvl < 2; ++nLvl) {
  oNumLvl = oNumbering.GetLevel(nLvl);
  oParagraph = Api.CreateParagraph();
  oParagraph.AddText("This is an example of the bulleted paragraph № " + (nLvl + 1));
  oParagraph.SetNumbering(oNumLvl);
  oDocument.Push(oParagraph);
}
builder.SaveFile("docx", "CreateNumbering.docx");
builder.CloseFile();

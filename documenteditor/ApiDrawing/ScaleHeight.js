builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
for (i = 3; i > 0; i--) {
    oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
    oStroke = Api.CreateStroke(0, Api.CreateNoFill());
    oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
    oParagraph.AddDrawing(oDrawing);
    oDrawing.ScaleHeight(i);
} 
builder.SaveFile("docx", "ScaleHeight.docx");
builder.CloseFile();
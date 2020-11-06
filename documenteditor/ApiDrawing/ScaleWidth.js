builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
for (i = 1; i < 4; i++ ){
    oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
    oStroke = Api.CreateStroke(0, Api.CreateNoFill());
    oDrawing = Api.CreateShape("cube", 963295, 963295, oFill, oStroke);
    oParagraph.AddDrawing(oDrawing);
    oDrawing.ScaleWidth(i);
}
builder.SaveFile("docx", "ScaleWidth.docx");
builder.CloseFile();
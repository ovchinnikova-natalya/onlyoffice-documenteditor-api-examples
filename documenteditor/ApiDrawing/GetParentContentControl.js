builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = Api.CreateParagraph();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 255));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
oParentContentControl = oDrawing.GetParentContentControl();
oParentContentControl.AddText("This is a parent content control.")
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();
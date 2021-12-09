builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oImage1 = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oSlide.AddDrawing(oImage1);
oImage2 = Api.CreateImage("https://api.onlyoffice.com/content/img/editor/sharing_settings.png", 60 * 36000, 35 * 36000);
oSlide.AddDrawing(oImage2);
aImages = oSlide.GetAllImages();
sType = aImages[0].GetClassType();
oSlide.RemoveAllObjects();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type = " + sType);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetAllImages.pptx");
builder.CloseFile();
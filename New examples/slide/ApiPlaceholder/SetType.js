builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oPlaceholder = Api.CreatePlaceholder("chart");
oShape.SetPlaceholder(oPlaceholder);
oPlaceholder.SetType("picture");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetType.pptx");
builder.CloseFile();
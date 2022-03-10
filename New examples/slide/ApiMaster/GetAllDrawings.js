builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oDrawing.SetSize(300 * 36000, 130 * 36000);
oMaster.AddObject(oDrawing);
aDrawings = oMaster.GetAllDrawings();
oPlaceholder = Api.CreatePlaceholder("picture");
aDrawings[0].SetPlaceholder(oPlaceholder);
builder.SaveFile("pptx", "GetAllDrawings.pptx");
builder.CloseFile();
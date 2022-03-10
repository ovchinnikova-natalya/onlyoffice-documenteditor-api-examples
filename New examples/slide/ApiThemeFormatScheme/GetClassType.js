builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide1 = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
oTheme = oMaster.GetTheme();
oFormatScheme = oTheme.GetFormatScheme();
sType = oFormatScheme.GetClassType();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Class type = " + sType);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetClassType.pptx");
builder.CloseFile();
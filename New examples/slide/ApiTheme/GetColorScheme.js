builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster();
oTheme = oMaster.GetTheme();
oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(104, 155, 104), Api.CreateRGBColor(255, 224, 204), Api.CreateRGBColor(155, 64, 1), Api.CreateRGBColor(61, 74, 107), 
    Api.CreateRGBColor(100, 155, 104), Api.CreateRGBColor(104, 0, 104), Api.CreateRGBColor(104, 155, 0), Api.CreateRGBColor(104, 140, 104), Api.CreateRGBColor(110, 155, 104), 
    Api.CreateRGBColor(90, 155, 104), Api.CreateRGBColor(255, 224, 204), Api.CreateRGBColor(100, 224, 204)], "New color scheme");
oTheme.SetColorScheme(oClrScheme);
oClrScheme = oTheme.GetColorScheme();
sType = oClrScheme.GetClassType();
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
builder.SaveFile("pptx", "GetColorScheme.pptx");
builder.CloseFile();
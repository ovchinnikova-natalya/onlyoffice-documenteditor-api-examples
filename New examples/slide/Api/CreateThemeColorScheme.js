builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(104, 155, 104), Api.CreateRGBColor(255, 224, 204), Api.CreateRGBColor(155, 64, 1), Api.CreateRGBColor(61, 74, 107), 
Api.CreateRGBColor(100, 155, 104), Api.CreateRGBColor(104, 0, 104), Api.CreateRGBColor(104, 155, 0), Api.CreateRGBColor(104, 140, 104), Api.CreateRGBColor(110, 155, 104), 
Api.CreateRGBColor(90, 155, 104), Api.CreateRGBColor(255, 224, 204), Api.CreateRGBColor(100, 224, 204)], "New color scheme");
oTheme = oSlide.GetTheme();
oTheme.SetColorScheme(oClrScheme);
builder.SaveFile("pptx", "CreateThemeColorScheme.pptx");
builder.CloseFile();
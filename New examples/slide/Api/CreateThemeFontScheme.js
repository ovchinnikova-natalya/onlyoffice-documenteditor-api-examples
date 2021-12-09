builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oFontScheme = Api.CreateThemeFontScheme("Times New Roman", "Ani", "Ubuntu", "Arial", "Rekha", "padmaa", "New font scheme");
oTheme = oSlide.GetTheme();
oTheme.SetFontScheme(oFontScheme);
builder.SaveFile("pptx", "CreateThemeFontScheme.pptx");
builder.CloseFile();
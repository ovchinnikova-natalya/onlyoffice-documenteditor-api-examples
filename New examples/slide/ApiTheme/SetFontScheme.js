builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster();
oTheme = oMaster.GetTheme();
oFontScheme = Api.CreateThemeFontScheme("Times New Roman", "Ani", "Ubuntu", "Arial", "Rekha", "padmaa", "New font scheme");
oTheme.SetFontScheme(oFontScheme);
builder.SaveFile("pptx", "SetFontScheme.pptx");
builder.CloseFile();
builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(160, 82, 45), Api.CreateRGBColor(205, 133, 63), Api.CreateRGBColor(222, 184, 135), Api.CreateRGBColor(245, 222, 179), Api.CreateRGBColor(240, 128, 128), 
    Api.CreateRGBColor(255, 69, 0), Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(79, 79, 79), Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(176, 196, 222), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 222, 173)], "New color scheme");
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 218, 185), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(238, 203, 173), 100000);
oFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oBgFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oStroke1 = Api.CreateStroke(0, oFill1);
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(238, 149, 114), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 114, 86), 100000);
oFill2 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oBgFill2 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oStroke2 = Api.CreateStroke(0, oFill2);
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 127, 36), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(238, 118, 33), 100000);
oFill3 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oBgFill3 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oStroke3 = Api.CreateStroke(0, oFill3);
oFormatScheme = Api.CreateThemeFormatScheme([oFill1, oFill2, oFill3], [oBgFill1, oBgFill2, oBgFill3], [oStroke1, oStroke2, oStroke3], "New format scheme");
oFontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
oTheme = Api.CreateTheme("New theme", oMaster, oClrScheme, oFormatScheme, oFontScheme);
oPresentation.ApplyTheme(oTheme);
builder.SaveFile("pptx", "CreateTheme.pptx");
builder.CloseFile();
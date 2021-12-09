builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster();
oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(104, 155, 104), Api.CreateRGBColor(255, 224, 204), Api.CreateRGBColor(155, 64, 1), Api.CreateRGBColor(61, 74, 107), 
    Api.CreateRGBColor(100, 155, 104), Api.CreateRGBColor(104, 0, 104), Api.CreateRGBColor(104, 155, 0), Api.CreateRGBColor(104, 140, 104), Api.CreateRGBColor(110, 155, 104), 
    Api.CreateRGBColor(90, 155, 104), Api.CreateRGBColor(255, 224, 204), Api.CreateRGBColor(100, 224, 204)], "New color scheme");
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
oFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oBgFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oStroke1 = Api.CreateStroke(0, oFill1);
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 0), 100000);
oFill2 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oBgFill2 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oStroke2 = Api.CreateStroke(0, oFill2);
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(0, 164, 101), 100000);
oFill3 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oBgFill3 = Api.CreateRadialGradientFill([oGs1, oGs2]);
oStroke3 = Api.CreateStroke(0, oFill3);
oFormatScheme = Api.CreateThemeFormatScheme([oFill1, oFill2, oFill3], [oBgFill1, oBgFill2, oBgFill3], [oStroke1, oStroke2, oStroke3], "New format scheme");
oFontScheme = Api.CreateThemeFontScheme("Times New Roman", "Ani", "Ubuntu", "Arial", "Rekha", "padmaa", "New font scheme");
oTheme = Api.CreateTheme("New theme", oMaster, oClrScheme, oFormatScheme, oFontScheme);
oMaster.SetTheme(oTheme);
builder.SaveFile("pptx", "SetTheme.pptx");
builder.CloseFile();
builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = Api.CreateSlide();
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
oPresentation.AddSlide(oSlide);
oPresentation.RemoveSlides(0, 1);
builder.SaveFile("pptx", "RemoveSlides.pptx");
builder.CloseFile();
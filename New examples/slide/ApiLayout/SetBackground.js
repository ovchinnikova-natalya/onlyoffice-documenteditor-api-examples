builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
oLayout = oMaster.GetLayout(0);
oGs = Api.CreateGradientStop(Api.CreateRGBColor(255, 218, 185), 0);
oGs = Api.CreateGradientStop(Api.CreateRGBColor(238, 203, 173), 100000);
oFill = Api.CreateRadialGradientFill([oGs, oGs]);
oLayout.SetBackground(oFill);
oSlide.FollowLayoutBackground();
builder.SaveFile("pptx", "SetBackground.pptx");
builder.CloseFile();
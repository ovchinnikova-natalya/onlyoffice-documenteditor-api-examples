builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oMaster.SetBackground(oFill);
oSlide.FollowMasterBackground();
builder.SaveFile("pptx", "FollowMasterBackground.pptx");
builder.CloseFile();
builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oLayout = oSlide.GetLayout();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oLayout.SetBackground(oFill);
oSlide.FollowLayoutBackground();
builder.SaveFile("pptx", "GetLayout.pptx");
builder.CloseFile();
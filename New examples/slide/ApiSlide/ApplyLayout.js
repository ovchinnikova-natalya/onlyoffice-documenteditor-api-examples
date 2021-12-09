builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oLayout = Api.CreateLayout();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oLayout.SetBackground(oFill);
oSlide.ApplyLayout(oLayout);
builder.SaveFile("pptx", "ApplyLayout.pptx");
builder.CloseFile();
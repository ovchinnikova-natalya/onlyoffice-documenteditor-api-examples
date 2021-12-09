builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster();
oLayout = Api.CreateLayout(oMaster);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oLayout.SetBackground(oFill);
builder.SaveFile("pptx", "SetBackground.pptx");
builder.CloseFile();
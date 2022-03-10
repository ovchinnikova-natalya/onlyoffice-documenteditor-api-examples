builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
oLayout = oMaster.GetLayout(4);
oSlide.ApplyLayout(oLayout);
builder.SaveFile("pptx", "ApplyLayout.pptx");
builder.CloseFile();
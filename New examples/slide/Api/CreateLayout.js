builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = Api.CreateMaster();
oPresentation.AddMaster(oMaster);
oLayout = Api.CreateLayout(oMaster);
builder.SaveFile("pptx", "CreateLayout.pptx");
builder.CloseFile();
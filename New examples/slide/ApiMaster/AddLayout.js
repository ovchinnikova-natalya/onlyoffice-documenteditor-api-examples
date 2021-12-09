builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = Api.CreateMaster();
oPresentation.AddMaster(oMaster);
oLayout = Api.CreateLayout();
oMaster.AddLayout(oLayout);
builder.SaveFile("pptx", "AddLayout.pptx");
builder.CloseFile();
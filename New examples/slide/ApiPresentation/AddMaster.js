builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = Api.CreateMaster();
oPresentation.AddMaster(oMaster);
builder.SaveFile("pptx", "AddMaster.pptx");
builder.CloseFile();
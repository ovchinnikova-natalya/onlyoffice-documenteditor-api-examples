builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oMaster.SetBackground(oFill);
oDuplicateMaster = oMaster.Duplicate(1);
builder.SaveFile("pptx", "Duplicate.pptx");
builder.CloseFile();
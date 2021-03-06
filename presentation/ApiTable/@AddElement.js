builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oTable = Api.CreateTable(2, 4);
oTable.SetPosition(608400, 1267200);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oTable.AddElement(1, oParagraph);
oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "AddElement.pptx");
builder.CloseFile();
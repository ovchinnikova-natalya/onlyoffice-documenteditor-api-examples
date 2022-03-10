builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
oLayout = oMaster.GetLayout(0);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oLayout.AddObject(oShape);
oSlide = Api.CreateSlide();
oPresentation.AddSlide(oSlide);
oCopyLayout = oLayout.Copy();
oMaster.AddLayout(1, oCopyLayout);
oSlide.ApplyLayout(oCopyLayout);
builder.SaveFile("pptx", "Copy.pptx");
builder.CloseFile();
builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
nCountBefore = oMaster.GetLayoutsCount();
oLayout = oMaster.GetLayout(0);
oLayout.Delete();
nCountAfter = oMaster.GetLayoutsCount();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of layouts before deletion: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of layouts after deletion: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "Delete.pptx");
builder.CloseFile();
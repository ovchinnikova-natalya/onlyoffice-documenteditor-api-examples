builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oSlide.AddObject(oDrawing1);
oDrawing2 = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oDrawing2.SetVerAxisTitle("USD In Hundred Thousands", 10);
oDrawing2.SetHorAxisTitle("Year", 11);
oDrawing2.SetLegendPos("bottom");
oDrawing2.SetShowDataLabels(false, false, true, false);
oDrawing2.SetTitle("Financial Overview", 13);
oSlide.AddObject(oDrawing2);
oDrawing2.Delete();
oDocContent = oDrawing1.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("The chart was deleted from this slide.");
builder.SaveFile("pptx", "Delete.pptx");
builder.CloseFile();
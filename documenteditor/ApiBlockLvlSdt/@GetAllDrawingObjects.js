builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oBlockLvlSdt.AddElement(oDrawing1, 0);
oDrawing2 = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oDrawing2.SetVerAxisTitle("USD In Hundred Thousands", 10);
oDrawing2.SetHorAxisTitle("Year", 11);
oDrawing2.SetLegendPos("bottom");
oDrawing2.SetShowDataLabels(false, false, true, false);
oDrawing2.SetTitle("Financial Overview", 13);
oBlockLvlSdt.AddElement(oDrawing2, 1);
oDocument.AddElement(0, oBlockLvlSdt);
aDrawingObjects = oBlockLvlSdt.GetAllDrawingObjects();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
aDrawingObjects[0].Fill(oFill);
builder.SaveFile("docx", "GetAllDrawingObjects.docx");
builder.CloseFile();
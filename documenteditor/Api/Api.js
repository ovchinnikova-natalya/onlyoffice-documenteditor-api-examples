builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is an example for base class methods.");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText(" A paragraph and a numbered list were created.");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText(" Then a chart, a shape and a table were created. The result was saved to the document.");
oParagraph.AddElement(oRun);
oParagraph = Api.CreateParagraph();
oDrawing = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oParagraph.AddDrawing(oDrawing);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 224, 204), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 164, 101), 100000);
oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oDrawing = Api.CreateShape("rect", 5930900, 395605, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDocument.Push(oParagraph);
oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
Api.Save();
builder.SaveFile("docx", "Api.docx");
builder.CloseFile();
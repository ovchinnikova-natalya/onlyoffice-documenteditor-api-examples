builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oChart1 = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oParagraph.AddDrawing(oChart1);
oChart2 = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart2.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart2);
oCharts = oParagraph.GetAllCharts();
oStroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.CreateRGBColor(155, 64, 1)));
oCharts[1].SetMinorHorizontalGridlines(oStroke);
builder.SaveFile("docx", "GetAllCharts.docx");
builder.CloseFile();
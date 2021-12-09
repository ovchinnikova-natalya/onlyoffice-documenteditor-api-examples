builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster();
oLayout = Api.CreateLayout(oMaster);
oChart1 = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
  ], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oLayout.AddDrawing(oChart1);
oChart2 = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
  ], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart2.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart2.SetHorAxisTitle("Year", 11);
oChart2.SetLegendPos("bottom");
oChart2.SetShowDataLabels(false, false, true, false);
oChart2.SetTitle("Financial Overview", 13);
oLayout.AddDrawing(oChart2);
aCharts = oLayout.GetAllCharts();
oStroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.CreateRGBColor(155, 64, 1)));
aCharts[1].SetMinorHorizontalGridlines(oStroke);
builder.SaveFile("pptx", "GetAllCharts.pptx");
builder.CloseFile();
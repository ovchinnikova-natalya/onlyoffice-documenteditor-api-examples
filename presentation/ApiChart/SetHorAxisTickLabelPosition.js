builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oChart = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetTitle("Financial Overview", 13);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetHorAxisTickLabelPosition("high");
oSlide.AddObject(oChart);
builder.SaveFile("pptx", "SetHorAxisTickLabelPosition.pptx");
builder.CloseFile();
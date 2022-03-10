builder.CreateFile("pptx");
oPresentation = Api.GetPresentation();
oSlide = oPresentation.GetSlideByIndex(0);
oMaster = oPresentation.GetMaster(0);
oTheme = oMaster.GetTheme();
oClrScheme = Api.CreateThemeColorScheme([Api.CreateRGBColor(160, 82, 45), Api.CreateRGBColor(205, 133, 63), Api.CreateRGBColor(222, 184, 135), Api.CreateRGBColor(245, 222, 179), Api.CreateRGBColor(240, 128, 128), 
    Api.CreateRGBColor(255, 69, 0), Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(79, 79, 79), Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(176, 196, 222), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 222, 173)], "New color scheme");
oTheme.SetColorScheme(oClrScheme);
oSlide.RemoveAllObjects();
oChart = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 20);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
oSlide.AddObject(oChart);
builder.SaveFile("pptx", "GetTheme.pptx");
builder.CloseFile();
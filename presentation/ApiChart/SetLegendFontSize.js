builder.CreateFile("pptx");
var Presentation = Api.GetPresentation();
var Slide = Presentation.GetSlideByIndex(0);
Slide.RemoveAllObjects();
Chart = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
Chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
Chart.SetHorAxisTitle("Year", 11);
Chart.SetTitle("Financial Overview", 13);
Chart.SetSize(300 * 36000, 130 * 36000);
Chart.SetLegendFontSize(16);
Slide.AddObject(Chart);
builder.SaveFile("pptx", "SetLegendFontSize.pptx");
builder.CloseFile();
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 218, 185), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(238, 203, 173), 100000);
var oFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oBgFill1 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke1 = Api.CreateStroke(0, oFill1);
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(238, 149, 114), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 114, 86), 100000);
var oFill2 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oBgFill2 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke2 = Api.CreateStroke(0, oFill2);
oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 127, 36), 0);
oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(238, 118, 33), 100000);
var oFill3 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oBgFill3 = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke3 = Api.CreateStroke(0, oFill3);
var oFormatScheme = Api.CreateThemeFormatScheme([oFill1, oFill2, oFill3], [oBgFill1, oBgFill2, oBgFill3], [oStroke1, oStroke2, oStroke3], "New format scheme");
var oTheme = oSlide.GetTheme();
oTheme.SetFormatScheme(oFormatScheme);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("bar3D", [
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
builder.SaveFile("pptx", "SetFormatScheme.pptx");
builder.CloseFile();
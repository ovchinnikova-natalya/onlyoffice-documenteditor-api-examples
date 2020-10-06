builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oDrawing.SetVerAxisTitle("USD In Hundred Thousands", 10);
oDrawing.SetHorAxisTitle("Year", 11);
oStroke = Api.CreateStroke(1 * 15000, Api.CreateSolidFill(Api.CreateRGBColor(155, 64, 1)));
oDrawing.SetMajorHorizontalGridlines(oStroke);
oDrawing.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oDrawing);
builder.SaveFile("docx", "SetMajorHorizontalGridlines.docx");
builder.CloseFile();
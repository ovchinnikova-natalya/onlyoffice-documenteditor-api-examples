builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oDrawing.SetSize(300 * 36000, 130 * 36000);
var sJSON = oDrawing.ToJSON();
var oDocContent = oDrawing.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.SetBold(true);
oRun.AddText("The ApiDrawing object in the JSON format: ");
oParagraph.AddElement(oRun);
oParagraph.AddText(sJSON.substring(0, 747) + "..");
oSlide.AddObject(oDrawing);
builder.SaveFile("pptx", "ToJSON.pptx");
builder.CloseFile();
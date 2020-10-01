builder.CreateFile("pptx");
var Presentation = Api.GetPresentation();
var Slide = Presentation.GetSlideByIndex(0);
Slide.RemoveAllObjects();
var Fill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
var Stroke = Api.CreateStroke(0, Api.CreateNoFill());
var Shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, Fill, Stroke);
Shape.SetPosition(608400, 1267200);
var DocContent = Shape.GetDocContent();
var Paragraph = DocContent.GetElement(0);
Paragraph.AddText("This is just a sample text.");
Presentation.CreateNewHistoryPoint();
Paragraph = Api.CreateParagraph();
Paragraph.AddText("New history point was just created.");
DocContent.Push(Paragraph);
Slide.AddObject(Shape);
builder.SaveFile("pptx", "CreateNewHistoryPoint.pptx");
builder.CloseFile();
builder.CreateFile("xlsx");
var Worksheet = Api.GetSheet('Sheet1');
var Stroke, Fill;
Fill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
Stroke = Api.CreateStroke(0, Api.CreateNoFill());
var Shape = Worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, Fill, Stroke, 0, 2 * 36000, 0, 3 * 36000);
DocContent = Shape.GetDocContent();
Paragraph = DocContent.GetElement(0);
Paragraph.AddText("This is a sample text on 'Sheet1'.");
builder.SaveFile("xlsx", "GetSheet.xlsx");
builder.CloseFile();
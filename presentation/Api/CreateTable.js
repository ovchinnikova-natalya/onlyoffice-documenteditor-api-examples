builder.CreateFile("pptx");
var Presentation = Api.GetPresentation();
var Table = Api.CreateTable(2, 4);
var Slide = Presentation.GetSlideByIndex(0);
Slide.RemoveAllObjects();
Slide.AddObject(Table);
builder.SaveFile("pptx", "CreateTable.pptx");
builder.CloseFile();
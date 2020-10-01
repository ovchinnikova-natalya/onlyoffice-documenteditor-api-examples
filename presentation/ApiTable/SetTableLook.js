builder.CreateFile("pptx");
var Presentation = Api.GetPresentation();
var Table = Api.CreateTable(2, 4);
Table.SetTableLook(true, false, false, false, false, true);
var Slide = Presentation.GetSlideByIndex(0);
Slide.RemoveAllObjects();
Slide.AddObject(Table);
builder.SaveFile("pptx", "SetTableLook.pptx");
builder.CloseFile();
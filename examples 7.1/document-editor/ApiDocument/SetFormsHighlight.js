builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Add a text field to the next line (Forms -> Text Field). It will be highlighted with yellow color.");
oDocument.SetFormsHighlight(255, 255, 0);
builder.SaveFile("docx", "SetFormsHighlight.docx");
builder.CloseFile();
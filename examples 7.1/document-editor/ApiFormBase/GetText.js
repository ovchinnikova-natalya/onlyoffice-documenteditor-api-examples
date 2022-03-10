builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Add a combo box to the next line (Forms -> Combo Box), copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
oParagraph.AddElement(oRun);
var aForms = oDocument.GetAllForms();
oParagraph.RemoveElement(0);
aForms[0].SetText("Country");
var sText = aForms[0].GetText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Form text: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Add a checkbox to the next line (Forms -> Checkbox), copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
oParagraph.AddElement(oRun);
var aCheckBox = oDocument.GetAllForms();
oParagraph.RemoveElement(0);
aCheckBox[0].SetChecked(true);
builder.SaveFile("docx", "SetChecked.docx");
builder.CloseFile();
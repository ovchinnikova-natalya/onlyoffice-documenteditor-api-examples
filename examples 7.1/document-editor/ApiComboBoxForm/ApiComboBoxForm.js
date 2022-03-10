builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Add a combo box to the next line (Forms -> Combo Box), copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
oParagraph.AddElement(oRun);
var aComboBox = oDocument.GetAllForms();
oParagraph.RemoveElement(0);
aComboBox[0].SetListValues(["Latvia", "USA", "UK"]);
aComboBox[0].SetText("Country");
aComboBox[0].SelectListValue("USA");
var aListValues = aComboBox[0].GetListValues();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Combo box list values: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aListValues.length; i++ ){
    oParagraph.AddText(aListValues[i]);
    oParagraph.AddLineBreak();
}
var bEdit = aComboBox[0].IsEditable();
oParagraph.AddLineBreak();
oParagraph.AddText("The first combo box from this document is editable: " + bEdit);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ApiComboBoxForm.docx");
builder.CloseFile();
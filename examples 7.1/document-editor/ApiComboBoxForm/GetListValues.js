builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Add a combo box to the next line (Forms -> Combo Box), copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
oParagraph.AddElement(oRun);
var aComboBox = oDocument.GetAllForms();
oParagraph.RemoveElement(0);
aComboBox[0].SetListValues(["Latvia", "USA", "UK"]);
var aListValues = aComboBox[0].GetListValues();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Combo box list values: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aListValues.length; i++ ){
    oParagraph.AddText(aListValues[i]);
    oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetListValues.docx");
builder.CloseFile();
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetComb(true);
var bComb = oTextForm.IsComb();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is comb: " + bComb);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsComb.docx");
builder.CloseFile();
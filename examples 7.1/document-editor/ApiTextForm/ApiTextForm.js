builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.SetCharactersLimit(5);
oTextForm.SetText("John Smith");
oTextForm.SetComb(true);
var nLimit = oTextForm.GetCharactersLimit();
var bComb = oTextForm.IsComb();
var bMultiline = oTextForm.IsMultiline();
var bAutoFit = oTextForm.IsAutoFit();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Characters limit: " + nLimit);
oParagraph.AddLineBreak();
oParagraph.AddText("The first text form from this document is comb: " + bComb);
oParagraph.AddLineBreak();
oParagraph.AddText("The first text form from this document is multiline: " + bMultiline);
oParagraph.AddLineBreak();
oParagraph.AddText("The first text form from this document is autofit: " + bAutoFit);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "ApiTextForm.docx");
builder.CloseFile();
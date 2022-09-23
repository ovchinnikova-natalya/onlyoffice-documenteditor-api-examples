builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextForm = Api.CreateTextForm({"key": "Personal information", "tip": "Enter your first name", "required": true, "placeholder": "First name", "comb": true, "maxCharacters": 10, "cellWidth": 3, "multiLine": false, "autoFit": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oTextForm);
oTextForm.ToFixed(6 * 240, 2 * 240);
oTextForm.SetAutoFit(true);
var bAutoFit = oTextForm.IsAutoFit();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The first text form from this document is autofit: " + bAutoFit);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetAutoFit.docx");
builder.CloseFile();
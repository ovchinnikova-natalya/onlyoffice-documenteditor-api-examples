builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "respectBorders": false, "shiftX": 50, "shiftY": 50});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/editor/e-download.png");
oPictureForm.SetLockAspectRatio(true);
var bLock = oPictureForm.IsLockAspectRatio();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Lock aspect ratio of the first picture form in this document: " + bLock);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "IsLockAspectRatio.docx");
builder.CloseFile();
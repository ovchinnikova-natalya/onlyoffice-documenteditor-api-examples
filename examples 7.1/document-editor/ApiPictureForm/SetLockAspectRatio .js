builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Add a picture form to the next line (Forms -> Image), copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
oParagraph.AddElement(oRun);
var aPictureForm = oDocument.GetAllForms();
oParagraph.RemoveElement(0);
aPictureForm[0].SetImage("https://api.onlyoffice.com/content/img/editor/e-download.png");
aPictureForm[0].SetLockAspectRatio(70, 70);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Lock aspect ratio of the first picture form in this document is 70x70.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetLockAspectRatio.docx");
builder.CloseFile();
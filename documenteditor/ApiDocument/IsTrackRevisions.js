builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oDocument.SetTrackRevisions(true);
var oTrackRevisions = oDocument.IsTrackRevisions();
oParagraph.AddText("Change tracking is enabled: " + oTrackRevisions);
builder.SaveFile("docx", "IsTrackRevisions.docx");
builder.CloseFile();
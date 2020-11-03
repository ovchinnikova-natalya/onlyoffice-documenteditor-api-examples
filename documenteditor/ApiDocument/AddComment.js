builder.CreateFile( "docx "); 
var oDocument = Api.GetDocument(); 
var oParagraph = oDocument.GetElement(0); 
oParagraph.AddText( "This is just a sample text.");
oDocument.AddComment("This a comment to the document.", "Jane");
builder.SaveFile( "docx ",  "AddComment.docx "); 
builder.CloseFile();
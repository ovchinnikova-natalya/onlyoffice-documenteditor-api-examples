builder.CreateFile( "docx "); 
oDocument = Api.GetDocument(); 
oParagraph = oDocument.GetElement(0); 
oParagraph.AddText( "This is just a sample text.");
oParagraph.AddLineBreak();
oParagraph.AddText("The comment was added to this document.");
oDocument.AddComment("This a comment to the document.", "Jane");
builder.SaveFile( "docx ",  "AddComment.docx "); 
builder.CloseFile();
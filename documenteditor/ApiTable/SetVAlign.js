builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("The table was added to the bottom of the page. Scroll down to see it."); 
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.SetWrappingStyle(false);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
oTable.SetVAlign("bottom");
builder.SaveFile("docx", "SetVAlign.docx");
builder.CloseFile();
builder.CreateFile("docx");
oDocument = Api.GetDocument();
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTable.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
oTable.GetCell(0, 2).GetContent().GetElement(0).AddText("Cell 3");
oDocument.Push(oTable);
oSearch = oTable.Search("Cell");
oSearch[0].SetBold(true);
builder.SaveFile("docx", "Search.docx");
builder.CloseFile();
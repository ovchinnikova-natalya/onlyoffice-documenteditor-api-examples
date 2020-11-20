builder.CreateFile("docx");
oDocument = Api.GetDocument();
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable1 = Api.CreateTable(3, 3);
oTable1.SetWidth("percent", 100);
oTable1.SetStyle(oTableStyle);
oDocument.Push(oTable1);
oTable1.GetCell(0, 0).GetContent().GetElement(0).AddText("Table 1");
oTable2 = Api.CreateTable(3, 3);
oTable2.SetWidth("percent", 100);
oTable2.SetStyle(oTableStyle);
oDocument.Push(oTable2);
oTable2.GetCell(0, 0).GetContent().GetElement(0).AddText("Table 2");
oPreviousTable = oTable2.GetPrevious();
oPreviousTable.SetTableBorderTop("single", 32, 0, 0, 0, 255);
builder.SaveFile("docx", "GetPrevious.docx");
builder.CloseFile();
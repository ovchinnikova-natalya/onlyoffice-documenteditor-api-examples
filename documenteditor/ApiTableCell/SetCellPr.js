builder.CreateFile("docx");
oDocument = Api.GetDocument();
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable1 = Api.CreateTable(3, 3);
oTable1.SetWidth("percent", 100);
oTable1.SetStyle(oTableStyle);
oTableCellPr = oTableStyle.GetTableCellPr();
oTable1.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTableCellPr.SetCellMarginTop(720);
oDocument.Push(oTable1);
oTable2 = Api.CreateTable(3, 3);
oTable2.SetWidth("percent", 100);
oTable2.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oDocument.Push(oTable2);
oTable2.GetCell(0, 0).SetCellPr(oTableCellPr);
builder.SaveFile("docx", "SetCellPr.docx");
builder.CloseFile();
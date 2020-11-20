builder.CreateFile("docx");
oDocument = Api.GetDocument();
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.AddText("This is a block text content control.");
oCell = oTable.GetRow(0).GetCell(0);
oCell.AddElement(0, oBlockLvlSdt);
oParentTableCell = oBlockLvlSdt.GetParentTableCell();
oParentTableCell.SetCellBorderTop("single", 32, 0, 0, 0, 255);
builder.SaveFile("docx", "GetParentTableCell.docx");
builder.CloseFile();
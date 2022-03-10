builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
var oTable = Api.CreateTable(4, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.SetBackgroundColor(255, 255, 0, false);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetBackgroundColor.docx");
builder.CloseFile();
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable1 = Api.CreateTable(2, 3);
oTable1.SetWidth("percent", 100);
var oTable2 = oTable1.Copy();
oDocument.Push(oTable1);
oDocument.Push(oTable2);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();
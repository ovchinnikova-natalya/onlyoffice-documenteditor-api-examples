builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
oRun.Delete();
oWorksheet.GetRange("A9").SetValue("The run from the shape content was removed.")
builder.SaveFile("xlsx", "Delete.xlsx");
builder.CloseFile();
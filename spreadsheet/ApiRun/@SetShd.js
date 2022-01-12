builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text shading set to yellow.");
oRun.SetShd("clear", 255, 0, 0);
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "SetShd.xlsx");
builder.CloseFile();
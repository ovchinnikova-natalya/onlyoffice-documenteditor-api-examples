builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Fill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
var Stroke = Api.CreateStroke(0, Api.CreateNoFill());
var Shape = Worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, Fill, Stroke, 0, 2 * 36000, 0, 3 * 36000);
var Sheet = AddSheet('New sheet');
builder.SaveFile("xlsx", "AddSheet.xlsx");
builder.CloseFile();
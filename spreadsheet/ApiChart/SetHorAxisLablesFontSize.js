builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
Worksheet.GetRange("B1").SetValue(2014);
Worksheet.GetRange("C1").SetValue(2015);
Worksheet.GetRange("D1").SetValue(2016);
Worksheet.GetRange("A2").SetValue("Projected Revenue");
Worksheet.GetRange("A3").SetValue("Estimated Costs");
Worksheet.GetRange("B2").SetValue(200);
Worksheet.GetRange("B3").SetValue(250);
Worksheet.GetRange("C2").SetValue(240);
Worksheet.GetRange("C3").SetValue(260);
Worksheet.GetRange("D2").SetValue(280);
Worksheet.GetRange("D3").SetValue(280);
var Chart = Worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 5, 2 * 36000, 1, 3 * 36000);
Chart.SetTitle('Financial Overview', 13);
Chart.SetHorAxisLablesFontSize(10);
builder.SaveFile("xlsx", "SetHorAxisLablesFontSize.xlsx");
builder.CloseFile();
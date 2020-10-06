builder.CreateFile("xlsx");
var Worksheet = Api.GetActiveSheet();
var Range1 = Worksheet.GetRange("A1:B2");
var Range2 = Worksheet.GetRange("A2:B3");
var Range3 = Api.Intersect(Range1, Range2);
Range3.SetValue("Intersection");
builder.SaveFile("xlsx", "Intersect.xlsx");
builder.CloseFile();
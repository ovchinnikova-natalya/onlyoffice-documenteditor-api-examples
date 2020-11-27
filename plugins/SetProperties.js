builder.CreateFile("docx");
Api.pluginMethod_SetProperties({"copyoutenabled": true, "hideContentControlTrack": true});
builder.SaveFile("docx", "SetProperties.docx");
builder.CloseFile();
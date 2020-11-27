builder.CreateFile("docx");
Api.pluginMethod_AddOleObject({"width": 70, "height": 70, "data": "", "guid": "asc.{TE2BB87B-9F03-5060-8411-3AB4A5C71C39}", 
"imgSrc": "http://api.teamlab.info/content/img/plugins/plugin-manager.png", "widthPix": 60 * 36000, "heightPix": 60 * 36000});
Api.pluginMethod_EditOleObject({"width": 100, "height": 100, "data": "", "objectId": "0", 
"imgSrc": "http://api.teamlab.info/content/img/editor/mentions-create.png", "widthPix": 60 * 36000, "heightPix": 60 * 36000});
builder.SaveFile("docx", "EditOleObject.docx");
builder.CloseFile();
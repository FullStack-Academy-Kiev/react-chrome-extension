var contexts = ["page", "selection", "link", "editable", "image", "video", "audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  var id = chrome.contextMenus.create({
    "title": title, "contexts": [context],
    "onclick": genericOnClick
  });
  console.log("'" + context + "' item:" + id);
}
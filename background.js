chrome.browserAction.onClicked.addListener(function(activeTab)
{
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    repo = url.split("https://github.com/learn-co-students/")[1];
    var pattern = /^(.+)-.+-\d\d\d$/
    real_repo = pattern.exec(repo);
    chrome.tabs.create({ url: "https://github.com/learn-co-curriculum/"+real_repo[1] });
  });
});

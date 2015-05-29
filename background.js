chrome.browserAction.onClicked.addListener(function(activeTab)
{
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    repo = url.split("https://github.com/learn-co-students/")[1];
    if (repo.match("000")){
      var real_repo = repo.replace("-000", "")
      chrome.tabs.create({ url: "https://github.com/learn-co-curriculum/"+real_repo });  
    } else {
      var pattern = /^(.+)-.+-\d\d\d\d?$/
      var real_repo = pattern.exec(repo);
      chrome.tabs.create({ url: "https://github.com/learn-co-curriculum/"+real_repo[1] });  
    }
  });
});

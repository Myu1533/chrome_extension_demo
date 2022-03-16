unDisable.addEventListener("click", () => {
  // // get currentWindow
  // let [tab] = await chrome.tabs.getCurrent;

  // // executeScript with target tab
  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setDisableButton
  // })
  chrome.tabs.getSelected(null, function (tab) {
    //获取当前tab
    console.log(tab)
    //向tab发送请求
    chrome.tabs.sendMessage(tab.id, { action: "unDisable" }, function (response) {
        console.log(response)
    });
});
  
})
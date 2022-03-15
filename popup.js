let changeColor = document.getElementById("changeColor");
let unDisable = document.getElementById("unDisable");
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor
  })
})

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

unDisable.addEventListener("click", async () => {
  
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setDisableButton
  })
})


function setDisableButton() {
  let buttons = document.querySelectorAll('button')
  console.log(buttons)
  for(let btn of buttons) {
    btn.disabled = false
  }
}
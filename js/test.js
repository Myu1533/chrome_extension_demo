chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  sendResponse('test')
  if(request.action === 'unDisable') {
    setDisableButton()
  }
})


function setDisableButton() {
  let buttons = document.querySelectorAll('button')
  console.log(buttons)
  for(let btn of buttons) {
    btn.disabled = false
  }
}
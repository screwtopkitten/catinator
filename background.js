console.log("Background running")

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    let msg= {
        txt: "Cat Time"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}
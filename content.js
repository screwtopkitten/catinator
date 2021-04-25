console.log("all your base belong to cats")

let filenames =  [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpeg"
];


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if(message.txt === "Cat Time"){
        
        let imgs = document.getElementsByTagName('img');

        for(image of imgs){
            let r = Math.floor(Math.random()* filenames.length);
            let file = 'cats/' +filenames[r];
            let url = chrome.extension.getURL(file);
            image.src = url;
            console.log(url);
        }
            
    }
}
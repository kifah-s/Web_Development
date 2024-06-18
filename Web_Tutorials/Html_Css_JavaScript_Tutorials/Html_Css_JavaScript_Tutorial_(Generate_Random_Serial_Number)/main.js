/*
1 - Set characters to creat the serial
2 - Set serial characters count
3 - Creat empty variable to stor the serial
4 - Creat random number + access sequence
5 - Store the random element in the empty variable
6 - Loop * count
7 - Change serial element content with the serial variable 
*/

let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

btnEl.onclick = function () {
  let characters =
    "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charsCont = 10;
  let randomSerial = "";
  for (let i = 0; i < charsCont; i++) {
    randomSerial =
      randomSerial + characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = randomSerial;
};

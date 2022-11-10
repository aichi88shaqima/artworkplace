/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


let iceCream = 'cholocate';
if (iceCream === 'chcolate'){
    alert('我最喜欢吃巧克力冰淇淋。');
}else{
    alert('但是巧克力才是我的最爱呀......');
}*/

function mulitiply(num1,num2){
    let result = num1*num2;
    return result;
}
mulitiply(3,5);
/*document.querySelector('html').onclick = fuction()
{
    alert('被戳我，我怕疼');
}*/

/*let myHTML = document.querySelector('html');
myHTML.onclick = function(){
    alert("biechuowo");
}*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla酷毙了，'+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，'+storedName;
}

myButton.onclick = function() {
    setUserName();
}
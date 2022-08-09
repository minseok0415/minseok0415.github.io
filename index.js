function openPage(pageName, elmnt, color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

function randomColor() {
    let r=Math.floor(Math.random() * 254 + 1);
    let g=Math.floor(Math.random() * 254 + 1);
    let b=Math.floor(Math.random() * 254 + 1);
    document.getElementById("First").style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
    document.getElementById("first").style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
    document.getElementById("rgb").innerHTML=`rgb=${r},${g},${b}`
}


let horizontal=720;
let vertical=250;
function moveLeft() {
    horizontal-=10;
    if(horizontal<0) horizontal=1450;
    document.getElementById("square").style.marginLeft=horizontal+"px";
    document.getElementById("square").style.backgroundColor=`rgb(${horizontal%256},${(horizontal-vertical)%256},${vertical%256})`
}
function moveRight() {
    horizontal+=10;
    if(horizontal>1450) horizontal=0;
    document.getElementById("square").style.marginLeft=horizontal+"px";
    document.getElementById("square").style.backgroundColor=`rgb(${horizontal%256},${(horizontal-vertical)%256},${vertical%256})`
}
function moveUp() {
    vertical-=10;
    if(vertical<0) vertical=550;
    document.getElementById("square").style.marginTop=vertical+"px";
    document.getElementById("square").style.backgroundColor=`rgb(${horizontal%256},${(horizontal-vertical)%256},${vertical%256})`
}
function moveDown() {
    vertical+=10;
    if(vertical>550) vertical=0;
    document.getElementById("square").style.marginTop=vertical+"px";
    document.getElementById("square").style.backgroundColor=`rgb(${horizontal%256},${(horizontal-vertical)%256},${vertical%256})`
}

window.addEventListener("keydown", keyboard, false);

function keyboard(e) {
    switch(e.keyCode) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
}

function resultFun(x) {
    let positionLeft=x.clientX;
    let positionTop=x.clientY;
    if(positionTop<250) positionTop=250;
    else if(positionTop>550) positionTop=550;
    if(positionLeft<380) positionLeft=380;
    else if(positionLeft>1180) positionLeft=1180;
    document.getElementById('point').style.left=positionLeft+"px";
    document.getElementById('point').style.top=positionTop+"px";
    document.getElementById('point2').style.left=positionLeft+"px";
    document.getElementById('point2').style.top=positionTop+"px";
    document.getElementById('point3').style.left=positionLeft+"px";
    document.getElementById('point3').style.top=positionTop+"px";
    document.getElementById('point4').style.left=positionLeft+"px";
    document.getElementById('point4').style.top=positionTop+"px";
    document.getElementById('point5').style.left=positionLeft+"px";
    document.getElementById('point5').style.top=positionTop+"px";
}
if (document.addEventListener) {
    document.addEventListener("mousemove", resultFun);
};

let count=0;
let countUp=function(){
    count=count+1;
    if(count==10) count=0;
    document.querySelector("#count").innerText=count;
};
let count2=0;
let countUp2=function(){
    count2=count2+1;
    if(count2==10) count2=0;
    document.querySelector("#count2").innerText=count2;
};
let count3=0;
let countUp3=function(){
    count3=count3+1;
    if(count3==10) count3=0;
    document.querySelector("#count3").innerText=count3;
};
let countRset=function(){
    count=0;
    count2=0;
    count3=0;
    document.querySelector("#count").innerText=count;
    document.querySelector("#count2").innerText=count2;
    document.querySelector("#count3").innerText=count3;

};
function summit() {
    if(count==2 && count2==4 && count3==7) {
        document.getElementById("result").innerHTML='<a href="https://terms.naver.com/entry.naver?docId=3573398&cid=58949&categoryId=58982">|OPEN!|</a>'
    }
    else if(count==6 && count2==6 && count3==6) {
        document.getElementById("result").innerHTML='<a href="https://terms.naver.com/entry.naver?docId=3576304&cid=58812&categoryId=58828" style="color: red;">|OPEN!|</a>'
    }
    else if(count==4 && count2==1 && count3==5) {
        document.getElementById("result").innerHTML="OWNER'S BIRTHDAY"
    }
    else {
        document.getElementById("result").innerHTML="WRONG NUMBER"
    }
}
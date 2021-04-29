//variables
let cards;
let counter=[];
let l;
let win=0;
let j=1;
let moves=0;
let index=-1;
let match=2;
let loopSize2=0, loopSize4=0;
let anime=[
    "anime/1.png",
    "anime/2.png",
    "anime/3.png",
    "anime/4.png",
    "anime/5.png",
    "anime/6.png",
    "anime/7.png",
    "anime/8.png",
    "anime/9.png",
    "anime/10.png",
    "anime/11.png",
    "anime/12.png",
    "anime/13.png",
    "anime/14.png",
    "anime/15.png",
    "anime/16.png",
    "anime/17.png",
    "anime/18.png",
    "anime/19.png",
    "anime/20.png",
    "anime/21.png",
    "anime/22.png",
    "anime/23.png",
    "anime/24.png" 
];
let shinchan=[
    "shinchan/1.jpg",
    "shinchan/2.png",
    "shinchan/3.jpg",
    "shinchan/4.jpg",
    "shinchan/5.png",
    "shinchan/6.jpg",
    "shinchan/7.jpg",
    "shinchan/8.jpg",
    "shinchan/9.jpg",
    "shinchan/10.png",
    "shinchan/11.png",
    "shinchan/12.png",
    "shinchan/13.jpg",
    "shinchan/14.jpg",
    "shinchan/15.jpg",
    "shinchan/16.png",
    "shinchan/17.png",
    "shinchan/18.png",
    "shinchan/19.jpg",
    "shinchan/20.jpg",
    "shinchan/21.jpg",
    "shinchan/22.png",
    "shinchan/23.png",
    "shinchan/24.png" 
];
let shadesOfGrey=[
    "shadesOfGrey/1.jpg",
    "shadesOfGrey/2.jpg",
    "shadesOfGrey/3.jpg",
    "shadesOfGrey/4.jpg",
    "shadesOfGrey/5.jpg",
    "shadesOfGrey/6.jpg",
    "shadesOfGrey/7.jpg",
    "shadesOfGrey/8.jpg",
    "shadesOfGrey/9.jpg",
    "shadesOfGrey/10.jpg",
    "shadesOfGrey/11.jpg",
    "shadesOfGrey/12.jpg",
    "shadesOfGrey/13.jpg",
    "shadesOfGrey/14.jpg",
    "shadesOfGrey/15.jpg",
    "shadesOfGrey/16.jpg",
    "shadesOfGrey/17.jpg",
    "shadesOfGrey/18.jpg",
    "shadesOfGrey/19.jpg",
    "shadesOfGrey/20.jpg",
    "shadesOfGrey/21.jpg",
    "shadesOfGrey/22.jpg",
    "shadesOfGrey/23.jpg",
    "shadesOfGrey/24.jpg" 
];
let color=[
    "color/1.png",
    "color/2.jpg",
    "color/3.jpg",
    "color/4.jpg",
    "color/5.jpg",
    "color/6.png",
    "color/7.png",
    "color/8.jpg",
    "color/9.png",
    "color/10.jpg",
    "color/11.jpg",
    "color/12.png",
    "color/13.jpg",
    "color/14.jpg",
    "color/15.png",
    "color/16.png",
    "color/17.png",
    "color/18.png",
    "color/19.jpg",
    "color/20.jpg",
    "color/21.png",
    "color/22.jpg",
    "color/23.jpg",
    "color/24.jpg" 
];
let books=[
    "books/1.jpg",
    "books/2.jpg",
    "books/3.jpg",
    "books/4.jpg",
    "books/5.jpg",
    "books/6.jpg",
    "books/7.jpg",
    "books/8.jpg",
    "books/9.jpg",
    "books/10.jpg",
    "books/11.jpg",
    "books/12.jpg",
    "books/13.jpg",
    "books/14.jpg",
    "books/15.jpg",
    "books/16.png",
    "books/17.jpg",
    "books/18.jpg",
    "books/19.jpg",
    "books/20.jpg",
    "books/21.jpg",
    "books/22.jpg",
    "books/23.jpg",
    "books/24.jpg" 
];
let webSeries=[
    "webSeries/1.png",
    "webSeries/2.jpg",
    "webSeries/3.png",
    "webSeries/4.jpg",
    "webSeries/5.jpg",
    "webSeries/6.png",
    "webSeries/7.jpg",
    "webSeries/8.jpg",
    "webSeries/9.jpg",
    "webSeries/10.jpg",
    "webSeries/11.jpg",
    "webSeries/12.jpg",
    "webSeries/13.jpg",
    "webSeries/14.jpg",
    "webSeries/15.jpg",
    "webSeries/16.png",
    "webSeries/17.jpg",
    "webSeries/18.jpg",
    "webSeries/19.jpg",
    "webSeries/20.jpg",
    "webSeries/21.jpg",
    "webSeries/22.jpg",
    "webSeries/23.jpg",
    "webSeries/24.jpg" 
];



//query selector
let cardDiv;
const playground=document.querySelector('.playground');
const sizeButton=document.querySelectorAll('.game-size');
const sameCardButton=document.querySelectorAll('.card-match > button');
const designButton=document.querySelectorAll(".card-design > button > img");



//event listeners
sizeButton.forEach(button =>  button.addEventListener('click', addCards));  

sameCardButton.forEach(carding => carding.addEventListener('click', cardo));   

designButton.forEach(design => design.addEventListener('click', addDesign));  



//functions
function addCards(event)
{
    if(!event.target.classList.contains("disable")){
     event.target.classList.add("selected");   
    if(event.target.classList.contains("one")){
        index=0; loopSize2=8;}
    else if(event.target.classList.contains("two")){
        index=1; loopSize2=12;}
    else if(event.target.classList.contains("three")){
        index=2; loopSize2=16; loopSize4=8;}
    else{
        index=3;
        loopSize2=24; loopSize4=12;}
    if(index<3){
        for(let i=0;i<4;i++){
           const rowDiv =document.createElement("div");
           rowDiv.classList.add("row");
           for(let j=0;j<(2*(index+2));j++)
           {
                const cardDiv=document.createElement("div");
               cardDiv.classList.add("card" );
               rowDiv.appendChild(cardDiv);
           }
           playground.appendChild(rowDiv);
        }
    }
    else{
    for(let i=0;i<6;i++){
        const rowDiv =document.createElement("div");
        rowDiv.classList.add("row");
        for(let j=0;j<8;j++)
        {
            const cardDiv=document.createElement("div");
            cardDiv.classList.add("card" );
            rowDiv.appendChild(cardDiv);
        }
        playground.appendChild(rowDiv);
     }
    }
    sizeButton.forEach(button => {
        if(!button.classList.contains("selected"))
            button.classList.add("disable");
    })

      cards=[...document.querySelectorAll('.card')];      
    }    
};

function cardo(event)
{
    if(index==-1){
    alert("select anyone game dimension first- 4X4, 4X6, 4X8, 6X8"); 
    return;}
    const clas = event.target.className;
    if(clas=="four-same"&& (index==2 || index==3)){
        match=4;
        event.target.classList.add("selected"); 
        document.getElementsByClassName("two-same")[0].classList.add("disable"); }
    else{ 
        match=2;
        document.getElementsByClassName("four-same")[0].classList.add("disable");}
    if(clas=="four-same"&& (index==0 || index==1))
        alert("4 card game is for 4X8 and 6X8");
    

};

function addDesign(event){
    if(index==-1){
     alert("select anyone game dimension first- 4X4, 4X6, 4X8, 6X8");
     return;}
    if(!event.target.classList.contains("disable")){
        const target =event.target.className;
        let pic=[];
        if(target=="shinchan"){
            pic =[...shinchan];}
         else
          if(target=="shadesOfGrey"){
            pic =[...shadesOfGrey];}
            else
             if (target=="color"){
                pic =[...color];}
              else
               if(target=="anime"){
                   pic =[...anime];}
                else 
                  if(target=="books"){
                      pic =[...books];}
                    else {
                        pic =[...webSeries];}
        event.target.classList.add("selected");

        designButton.forEach(button => {
            if(!button.classList.contains("selected"))
            button.classList.add("disabled");
        })
        if(match==2)
        {
                //randomizing design
            for(let i=0 ; i<loopSize2 ; i++ )
            {
                const indexA = parseInt(Math.random() * cards.length);
                const cardA = cards[indexA];
                cards.splice(indexA, 1);
                const a =document.createElement("img");
                a.src=pic[i];
                cardA.appendChild(a);
                cardA.classList.add(pic[i]);

                const indexB = parseInt(Math.random() * cards.length);
                const cardB = cards[indexB];
                cards.splice(indexB, 1);
                const b =document.createElement("img");
                b.src=pic[i];
                cardB.appendChild(b);
                cardB.classList.add(pic[i]);

                a.style.visibility="hidden";
                b.style.visibility="hidden";
            }  
        }
        else
        {
            for(let i=0;i<loopSize4;i++ )
            {
                const indexA = parseInt(Math.random() * cards.length);
                const cardA = cards[indexA];
                cards.splice(indexA, 1);
                const a =document.createElement("img");
                a.src=pic[i];
                cardA.appendChild(a);
                a.style.visibility="hidden";
                cardA.classList.add(pic[i]);

                const indexB = parseInt(Math.random() * cards.length);
                const cardB = cards[indexB];
                cards.splice(indexB, 1);
                const b =document.createElement("img");
                b.src=pic[i];
                cardB.appendChild(b);
                b.style.visibility="hidden";
                cardB.classList.add(pic[i]);

                const indexC = parseInt(Math.random() * cards.length);
                const cardC = cards[indexC];
                cards.splice(indexC, 1);
                const c =document.createElement("img");
                c.src=pic[i];
                cardC.appendChild(c);
                c.style.visibility="hidden";
                cardC.classList.add(pic[i]);

                const indexD = parseInt(Math.random() * cards.length);
                const cardD = cards[indexD];
                cards.splice(indexD, 1);
                const d =document.createElement("img");
                d.src=pic[i];
                cardD.appendChild(d);
                d.style.visibility="hidden";
                cardD.classList.add(pic[i]);
            }  

        }
        cardDiv= document.querySelectorAll(".card");
        cardDiv.forEach(box => 
                box.addEventListener('click', showDesign));
    }
};

function showDesign(event)
{
    while(j==1)
    {
        d1=parseInt(Date.now());
        j=0;
    }
    box=event.target;
    let x=box.childNodes[0];
    if(x.style.visibility==="hidden"){
        x.style.visibility="visible";
        box.setAttribute('a','1');
        counter.push(box);
        l=counter.length;
    }
    setTimeout(() => {if(match==2&&l==2)
        check(counter);
        if(match==4&& l==4)
        check(counter);}, 300);
};
function check(counter){
    document.getElementById("mov").innerHTML = " "+(++moves);
    
    if(match==2 && counter[0].className!==counter[1].className){
        counter.forEach(box => {
            box.childNodes[0].style.visibility="hidden";
            box.removeAttribute('a');

    })}
    if(match==4 && (counter[0].className!==counter[1].className || counter[1].className!==counter[2].className || counter[2].className!==counter[3].className)){
        counter.forEach(box => {
            box.childNodes[0].style.visibility="hidden";
            box.removeAttribute('a');
        });
        }
    cardDiv.forEach(card => {
        if(card.hasAttribute('a'))
            ++win;    
    });
    if(win==cardDiv.length){
    var d2=parseInt(Date.now());
       var time = getTime(d2-d1); 
        alert("Time Taken: "+time+"\nYou win : Press Play Again! ");}
    win=0;    
    counter.length=0;    
};
function getTime(duration){
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds ;
}

function playAgain(){
    location.reload();
}
function clos(){
    document.getElementById("instructions").style.display="none";
}
function opn(){
    document.getElementById("instructions").style.display="block";
}

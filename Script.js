//creating user object
let userAdsDetails={
  name:"you",
  whoIAm:"i am going to help you earn from ads",
  reason:"then we give you a dividend , no cheating..",
  link:"https://otieu.com/4/6140311",
  id:"12345"
}
let el1=document.querySelectorAll("#identity,#whoIAm,#reason,#noOfClicks,#time");

//setting user object to element
el1[0].innerHTML=userAdsDetails.name;
el1[1].innerHTML=userAdsDetails.whoIAm;
el1[2].innerHTML=userAdsDetails.reason;

//checking if no of ads click is stored
//and displaying
if(localStorage.getItem(userAdsDetails.name)){
  userAdsDetails.noOfAdsClick=parseInt(localStorage.getItem(userAdsDetails.name));
  el1[3].innerHTML=userAdsDetails.noOfAdsClick;
}else{
  userAdsDetails.noOfAdsClick=0;
el1[3].innerHTML=userAdsDetails.noOfAdsClick;
}
//Adding no of ads click ,storing and
//changing link
function viewAds(){
  userAdsDetails.noOfAdsClick+=1;
  localStorage.setItem(userAdsDetails.name,userAdsDetails.noOfAdsClick)
  window.location.href=userAdsDetails.link;
 setInterval(()=>{el1[3].innerHTML=userAdsDetails.noOfAdsClick},1300);
}
function date(){
  let date = new Date();
  let fullDate =date.toDateString();
  let time =date.toLocaleTimeString();
  el1[4].innerHTML=fullDate+"|"+time;
}
setInterval(()=>{
  date();
},100)
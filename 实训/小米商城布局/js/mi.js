var search = document.getElementsByClassName('search')[0];
var search2 = document.getElementsByClassName('search2')[0];
var search3 = document.getElementsByClassName('search3')[0];
var count = document.getElementsByClassName('count');
var back = document.getElementById('back');
// console.log('back');
search3.style.display = "none";
back.style.display = "none";

search.onclick = function() {
    if (search3.style.display == "none") {
        search3.style.display = "block";
        search.style.borderColor = "#ff6700";
        search2.style.borderColor = "#ff6700";
        for(i = 0 ; i < count.length; i++) {
            count[i].style.visibility = "hidden";
        }
        
    } else {
        search3.style.display = "none";
        search.style.borderColor = "#ccc";
        search2.style.borderColor = "#ccc";
        for(i = 0 ; i < count.length; i++) {
            count[i].style.visibility = "visible";
        }
    }  
}

window.onscroll = function() {
    var top = document.documentElement.scrollTop;
//    console.log(top);
   if (top > 900) {
       back.style.display = "block";
   } else {
       back.style.display = "none";
   }
} 

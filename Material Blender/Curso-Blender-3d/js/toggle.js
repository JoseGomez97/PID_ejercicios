// JavaScript Document


function toggleFeedback(id) {
 var ele = document.getElementById('fb'+id);
 if (ele.style.display == "block") {
    ele.style.display = "none";
 } else {
       ele.style.display = "block";
   }
}


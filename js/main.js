// function On(){
//   document.getElementById("overlay").style.display= "block";
//   document.getElementById("pop-up").style.display= "block";
// }
// function of(){
//   document.getElementById("overlay").style.display= "none";
//   document.getElementById("pop-up").style.display= "none";
// }




function bgChang(){
  document.body.classList.toggle("dark-theme")
}



// js for toggle icon nav
function icon(){
  let div = document.getElementById("nav");
  if(div.style.display !=='none'){
    div.style.display ='none';
  }else{
    div.style.display='block';
  }
}

function cross(){
  let div = document.getElementById("nav");
    div.style.display ='none';
}


// $(document).ready(function() {
//   function checkWidth() {
//       var windowSize = $(window).width();

//       if (windowSize >= 479) {
//         function cross(){
//           let div = document.getElementById("nav");
//             div.style.display ='none';
//         }
//       }
//   }
// })
//Pop-up and overlay effects
function openModal(){
    document.getElementById("modal").style.display="block";
    document.getElementById("overlay").style.display="block"
}

function closeModal(){
    document.getElementById("modal").style.display="none";
    document.getElementById("overlay").style.display="none"
}

//regex for the form
function validateForm(){
    let name= document.getElementById("name").value;
    let email=document.getElementById("email").value;
    
    var regexName= /^[a-zA-Z\-]+$/;
    var regexEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (name.trim()=== ""){
      alert("Please Enter Your Full Name");
    }else if(regexName.test(name)){
      return true
    }else {
      alert ("Invalid Name")
    }


    if(email.trim()===""){
      alert("Please enter Email")
    }else if(regexEmail.test(email)){
      return true
    }else{
      alert ("Invalid Email")
    }

    // document.getElementById("result").innerHTML="You will soon receive a mail from us :)"
}
//clearing modal inputs
function clearModal(){
    const inputName= document.getElementById("name")
    const inputEmail=document.getElementById("email")

    inputName.value= " "
    inputEmail.value= " "
}

//Operations button text change

function displayPara1(){
  document.getElementById("final").innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quasi molestiae doloribus a perferendis, cum harum quam pariatur corporis fuga."
  
}

function displayPara2(){
  document.getElementById("final").innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae illo cumque, tempore cum ut tempora, magnam quod eveniet veniam consequuntur beatae? Amet quis, architecto eum nulla ratione pariatur fuga aut accusantium doloribus sunt minus aliquid labore perferendis, magni dicta rerum?"
}

function displayPara3(){
  document.getElementById("final").innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis distinctio aliquid nesciunt minima corporis illum, dolores impedit temporibus incidunt nisi nulla laboriosam at totam deserunt ullam expedita ut sapiente voluptas."
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
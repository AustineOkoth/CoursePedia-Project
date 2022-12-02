//DYNAMIC ADDING OF COPYRIGHT

const copyright = document.getElementById("copyright");
const year = new Date().getFullYear();
const month = new Date().getMonth();
const monthsArray = ["January", "February", "Martch", "April", "May", "June", "July","August","September"," October","November", "December"];
 copyright.innerHTML=`  <h5 style="text-align: center;" id="copyright"> &#169;System Analysis ${year} ${monthsArray[month]} </h5>`

//END OF COPYRIGHT ADDITION

//constant declarations.
const regNumber = document.getElementById("reg-no");
const studentName  = document.getElementById("student-name");
const currentCourse = document.getElementById("current-course");
const cutOff = document.getElementById("cut-off");

const Austine = ["SCM211-0244/2019","Austine Okoth ","Operations Research",38];
const Haron = ["SCM211-0768/2019","Haron Machoni", "Industrial Mathematics",41];
const Patience = ["SCM211-0253/2019","Patience Wangui","Computer Science",40];
const Carolyne  = ["SCM211-0252/2019", "Carolyne Njoroge","Mathematics and Computer Science",35];
const Muriithi = ["SC261-0953/2014", "Muriithi Mwangi","Quantity Survey",39];

// START OF REGISTER BUTTON

const registerButton = document.getElementById("register-btn");
const registerButtonConditions = document.getElementById("register-btn-conditions");
const cancelButtonConditions = document.getElementById("cancel-registration");
const proceedButtonConditions =document.getElementById("proceed-registration");


function showRegBox(){
    registerButton.addEventListener("click",function(){
        registerButtonConditions.classList.add("register-btn-conditions");
    })
    
}

function closeRegBox (){
    cancelButtonConditions.addEventListener("click",function(){
        registerButtonConditions.classList.remove("register-btn-conditions");
      
    })
   
}
// END OF REGISTER BUTTON.



//USER USERNAME BECOMES DISPLAYED

window.addEventListener("load", ()=>{

    const regNo = localStorage.getItem("REG-NUMBER");

   regNumber.innerHTML = `<li id="reg-no" style="color: white;">Reg No:${regNo}</li>`;
  
   if(regNo=="SCM211-0244/2019"){
    studentName.innerHTML = `<li id="reg-no" style="color: white;">Name: ${Austine[1]}</li>`;
    currentCourse.innerHTML = `<li id="current-course" style="color: white;">Current Course: ${Austine[2]}</li>`
    cutOff.innerHTML = `<li id="cut-off" style="color: white;">Your current points: ${Austine[3]}</li>`
   }


   
   if(regNo=="SCM211-0768/2019"){
    studentName.innerHTML = `<li id="reg-no" style="color: white;">Name: ${Haron[1]}</li>`;
    currentCourse.innerHTML = `<li id="current-course" style="color: white;">Current Course: ${Haron[2]}</li>`
    cutOff.innerHTML = `<li id="cut-off" style="color: white;">Your current points: ${Haron[3]}</li>`
   }

   
   if(regNo=="SCM211-0253/2019"){
    studentName.innerHTML = `<li id="reg-no" style="color: white;">Name: ${Patience[1]}</li>`;
    currentCourse.innerHTML = `<li id="current-course" style="color: white;">Current Course: ${Patience[2]}</li>`
    cutOff.innerHTML = `<li id="cut-off" style="color: white;">Your current points: ${Patience[3]}</li>`
   }

    
   if(regNo=="SCM211-0252/2019"){
    studentName.innerHTML = `<li id="student-name" style="color: white;">Name: ${Carolyne[1]}</li>`;
    currentCourse.innerHTML = `<li id="current-course" style="color: white;">Current Course: ${Carolyne[2]}</li>`
    cutOff.innerHTML = `<li id="cut-off" style="color: white;">Your current points: ${Carolyne[3]}</li>`
   }

    
   if(regNo=="SC261-0953/2014"){
    studentName.innerHTML = `<li id="reg-no" style="color: white;">Name: ${Muriithi[1]}</li>`;
    currentCourse.innerHTML = `<li id="current-course" style="color: white;">Current Course: ${Muriithi[2]}</li>`
    cutOff.innerHTML = `<li id="cut-off" style="color: white;">Your current points: ${Muriithi[3]}</li>`
   }



})








//VALIDATE THE ENTERED USERSAME

const  regNo = document.getElementById("reg-no");
const form = document.getElementById("form-block");


const loginBtn = document.getElementById("login-btn");


form.addEventListener("submit", function(e){
    let errorMessage =[];
  if(regNo.value!=="SCM211-0253/2019" && regNo.value !=="SCM211-0244/2019" && regNo.value !=="SC261-0953/2014" && regNo.value !=="SCM211-0252/2019" && regNo.value !=="SCM211-0768/2019"){
 
    e.preventDefault();
 errorMessage.push("Invalid Registration number");
 alert(errorMessage);

  }

});
//END OF VALIDATION


//DYNAMIC ADDING OF COPYRIGHT

const copyright = document.getElementById("copyright");
const year = new Date().getFullYear();
const month = new Date().getMonth();
copyright.innerHTML=`  <h5 style="text-align: center;" id="copyright"> &#169;System Analysis ${year} </h5>`

//END OF COPYRIGHT ADDITION

// STORING THE REGISTRATION NUMBER
function handleSubmit(){
  const userName = document.getElementById("reg-no").value;
  
  localStorage.setItem("REG-NUMBER", userName);


  return;
}
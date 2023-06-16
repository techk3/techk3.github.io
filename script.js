let pass_state = false;
let cpass_state = false;

let fname = document.getElementById("firstname");
let lname = document.getElementById("lastname");
let AltEmail = document.getElementById("altemail");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let msg = document.getElementById("passmatchmsg") 

let showPassword1 = document.getElementById("show-password1");
let showPassword2 = document.getElementById("show-password2");

let lowUpperCase = document.querySelector(".low-upper-case i");
let number = document.querySelector(".one-number i");
let specialChar = document.querySelector(".one-special-char i");
let eightChar = document.querySelector(".eight-character i");

let email = document.getElementById("email")
let form_error = document.getElementById("form-error");
let form_success = document.getElementById("form-success");

let submitbtn = document.getElementById("mail-submit-btn");
var popup = document.getElementById("popup");          
var success_popup = document.getElementById("success-popup");          

let mail = ""
let alphabets = false
let num = false
let sp_char = false
let e_char = false
let validAltEmail = false

let admission_year = ""
if(username.length === 12)
{
    admission_year = username.substring(4, 6);
}
else if(username.length === 8)
{
    admission_year = username.substring(0, 2);
}
else{
    admission_year = username.substring(0, 2);
}


if(fname.value.length === 0 || lname.value.length === 0)
{
    setEmailPlaceholder()
}

function setEmailPlaceholder()
{
    mail= "";
    email.innerHTML= "<p>Email : &lt;<i>firstname</i>&gt;.&lt;<i>surname</i>&gt;"+admission_year+"@ngit.edu.in <span style='font-size:11px'>(Max characters 20)</span></p>"
    email.style.display = "block"
}


function checkLength()
{    
    if((fname.value.length + lname.value.length) > 17)
    {
        form_error.innerHTML = "Email exceeeding 20 characters"        
        form_error.style.display = "block"   
    }
    else{
        form_error.innerHTML = ""
        form_error.style.display = "none"   
    }
}

fname.addEventListener("keyup", function(){
    form_error.innerHTML = ""
    form_error.style.display = "none"
    form_success.innerHTML = ""     
    form_success.style.display = "none"        
    if(fname.value.length !== 0 && fname.value.match('^[a-zA-Z]+$'))
    {        
        if(lname.value.length !== 0 && lname.value.match('^[a-zA-Z]+$'))
        {          
            checkLength()  
            // mail = fname.value + "." + lname.value + admission_year +"@ngit.edu.in"
            mail = fname.value.toLocaleLowerCase()+"."+lname.value.toLocaleLowerCase()+admission_year+"@ngit.edu.in";            
            email.innerHTML="<p>Email : "+mail+ "<span style='font-size:11px'>(Max characters 20)</span></p>";
            email.style.display = "block"     
        }
        document.getElementById("fnerror").innerHTML = ""
    }
    else if(fname.value.length === 0)
    {
        document.getElementById("fnerror").innerHTML = ""
        setEmailPlaceholder()
    }
    else
    {        
        // set error
        document.getElementById("fnerror").innerHTML = "Only alphabets allowed"
        setEmailPlaceholder()
    }          
});
lname.addEventListener("keyup", function(){     
    form_error.innerHTML = ""
    form_error.style.display = "none"        
    form_success.innerHTML = ""     
    form_success.style.display = "none"          
    if(lname.value.length !== 0 && lname.value.match('^[a-zA-Z]+$'))
    {        
        if(fname.value.length !== 0 && fname.value.match('^[a-zA-Z]+$'))
        {            
            checkLength()
            mail = fname.value.toLocaleLowerCase()+"."+lname.value.toLocaleLowerCase()+admission_year+"@ngit.edu.in";                    
            email.innerHTML="<p>Email : "+mail+ "<span style='font-size:11px'>(Max characters 20)</span></p>";
            email.style.display = "block"     
        }
        document.getElementById("lnerror").innerHTML = ""
    }
    else if(lname.value.length === 0)
    {
        document.getElementById("lnerror").innerHTML = ""
        setEmailPlaceholder()
    }
    else
    {        
        // set error
        document.getElementById("lnerror").innerHTML = "Only alphabets allowed"
        setEmailPlaceholder()
    }   
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

AltEmail.addEventListener("keyup", function(){     
    form_error.innerHTML = ""
    form_error.style.display = "none"
    form_success.innerHTML = ""
    form_success.style.display = "none"
    
    if (emailRegex.test(AltEmail.value)) {

        validAltEmail = true;             
        form_error.innerHTML = ""
        form_error.style.display = "none"                                    
    }
    else
    {
        validAltEmail = false
    }    
});


password.addEventListener("keyup", function(){     
    form_error.innerHTML = ""
    form_error.style.display = "none"    
    form_success.innerHTML = ""     
    form_success.style.display = "none"    
    if(password.value.length !== 0)
    {
        checkStrength(password.value);
    }
    else
    {
        lowUpperCase.classList.add('fa-circle');
        lowUpperCase.classList.remove('fa-check');   
        number.classList.add('fa-circle');
        number.classList.remove('fa-check');   
        specialChar.classList.add('fa-circle');
        specialChar.classList.remove('fa-check');   
        eightChar.classList.add('fa-circle');
        eightChar.classList.remove('fa-check');   
    }    
    passwordEquality()
});

cpassword.addEventListener("keyup", function(){    
    form_error.innerHTML = ""
    form_error.style.display = "none"  
    form_success.innerHTML = ""     
    form_success.style.display = "none"            
    passwordEquality()
});

function passwordEquality()
{    
    if(password.value.length !== 0 && cpassword.value.length !== 0)
    {
        if(password.value.length === cpassword.value.length && password.value === cpassword.value)
        {
            msg.innerHTML = "Password matched"
            msg.style.color = "green"
        }
        else
        {
            msg.innerHTML = "Password mismatch"
            msg.style.color = "red"
        }
    }    
    else{
        msg.innerHTML = ""
        cpassword.style.border = "1px solid #ccc"
    }
}

showPassword1.addEventListener('mousedown', function() {
    password.setAttribute("type","text");
    showPassword1.classList.add("fa-eye-slash")    
});
  
showPassword1.addEventListener('mouseup', function() {
    password.setAttribute("type","password");    
    showPassword1.classList.remove("fa-eye-slash")    
});

showPassword2.addEventListener('mousedown', function() {
    cpassword.setAttribute("type","text");    
    showPassword2.classList.add("fa-eye-slash")    
});
  
showPassword2.addEventListener('mouseup', function() {
    cpassword.setAttribute("type","password");    
    showPassword2.classList.remove("fa-eye-slash")    
});

// function toggle(){
//     if(pass_state){
//         document.getElementById("password").setAttribute("type","password");
//         pass_state = false;
//     }else{
//         document.getElementById("password").setAttribute("type","text")
//         pass_state = true;
//     }
// }
// function toggle1(){
//     if(cpass_state){
//         document.getElementById("cpassword").setAttribute("type","password");
//         cpass_state = false;
//     }else{
//         document.getElementById("cpassword").setAttribute("type","text")
//         cpass_state = true;
//     }
// }


function checkStrength(password) {    
    //If password contains both lower and uppercase characters
    // if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    //     strength += 1;
    //     lowUpperCase.classList.remove('fa-circle');
    //     lowUpperCase.classList.add('fa-check');
    // } else {
    //     lowUpperCase.classList.add('fa-circle');
    //     lowUpperCase.classList.remove('fa-check');
    // }
    if(password != "" && password.match('^[^\ ]+$'))
    {        
        if (password.match(/([a-zA-Z])/)) {       
            alphabets = true     
            lowUpperCase.classList.remove('fa-circle');
            lowUpperCase.classList.add('fa-check');
        } else {
            alphabets = false
            lowUpperCase.classList.add('fa-circle');
            lowUpperCase.classList.remove('fa-check');
        }
        //If it has numbers
        if (password.match(/([0-9])/)) {         
            num = true   
            number.classList.remove('fa-circle');
            number.classList.add('fa-check');
        } else {
            num = false
            number.classList.add('fa-circle');
            number.classList.remove('fa-check');
        }
        //If it has one special character
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {            
            sp_char = true
            specialChar.classList.remove('fa-circle');
            specialChar.classList.add('fa-check');
        } else {
            sp_char = false
            specialChar.classList.add('fa-circle');
            specialChar.classList.remove('fa-check');
        }
        //If password is greater than 7
        if (password.length > 7) {            
            e_char = true
            eightChar.classList.remove('fa-circle');
            eightChar.classList.add('fa-check');
        } else {
            e_char = false
            eightChar.classList.add('fa-circle');
            eightChar.classList.remove('fa-check');   
        }    
        document.getElementById("passerror").innerHTML = ""        
    }
    else if(password == "")
    {        
        document.getElementById("passerror").innerHTML = ""        
    }
    else{        
        document.getElementById("passerror").innerHTML = "Space is not allowed"
    }
}


function validateForm() {    
    // console.log(fname.value.length)
    // console.log(lname.value.length)
    // console.log(mail)
    // console.log(password.value.length)
    // console.log(alphabets)
    // console.log(num)
    // console.log(sp_char)
    // console.log(e_char)    

    if(password.value.length === cpassword.value.length)
    {
        if(mail.length !== 0 )
        {
            let loader = document.getElementById('loader')
            let loader_wrapper = document.getElementById("loader-wrapper");

            loader.innerHTML = "Loading...Please Wait!"
            loader_wrapper.classList.add("center");
            $.ajax({
                type: "POST",
                url: "email/useremailapi.php",
                data: { "email": mail.toLocaleLowerCase(),"password" : password.value, "altemail" : AltEmail.value },
                success: function(response) {
                    // console.log(response)
                    var data = JSON.parse(response)
                    if(data.error == true)
                    {             
                        //failure    
                        form_error.innerHTML = data.errormsg
                        form_error.style.display = "block"   
                        loader.innerHTML = ""
                        loader_wrapper.classList.remove("center");
                        return false                     
                    }  
                    if(data.error == false)
                    {
                        // success
                        popup.style.display = "none";
                        success_popup.style.display = "block";
                        form_error.innerHTML = ""
                        form_error.style.display = "none"  
                        form_success.innerHTML = data.successmsg     
                        form_success.style.display = "block"    
                        loader.innerHTML = ""
                        loader_wrapper.classList.remove("center");
                        fname.value = "";
                        lname.value = "";
                        email.innerHTML="";
                        email.style.display = "none"
                        AltEmail.value = "";
                        password.value = "";
                        cpassword.value = "";
                        msg.innerHTML = ""
                        lowUpperCase.classList.add('fa-circle');
                        lowUpperCase.classList.remove('fa-check');
                        number.classList.add('fa-circle');
                        number.classList.remove('fa-check');
                        specialChar.classList.add('fa-circle');
                        specialChar.classList.remove('fa-check');
                        eightChar.classList.add('fa-circle');
                        eightChar.classList.remove('fa-check'); 
                        return true
                    }                                                         
                }                
            });                        
        }        
    }    
    else
    {        
        form_error.innerHTML = "Password and Confirm password mismatch"
        form_error.style.display = "block"
        return false
    }
}

submitbtn.addEventListener("click", function(){
    // || username.substring(0,2) === "ps" || username.substring(0,2) === "tp"
    if(username.substring(0, 4) === "2455" || username.length == 8)
    {        
        if(fname.value.length !== 0 && lname.value.length !== 0 && mail.length !== 0 && AltEmail.value.length !== 0 && password.value.length !== 0 && cpassword.value.length !== 0){
            form_error.innerHTML = ""
            form_error.style.display = "none"  
            if(alphabets == true && num == true && sp_char == true && e_char == true && validAltEmail == true)
            {
                validateForm()
            }
            else if(alphabets == false)
            {            
                form_error.innerHTML = "Password must contain atleat one alphabet"
                form_error.style.display = "block"
                return false
            }
            else if(num == false)
            {            
                form_error.innerHTML = "Password must contain atleat one number"
                form_error.style.display = "block"
                return false
            }
            else if(sp_char == false)
            {            
                form_error.innerHTML = "Password must contain atleat one special character"
                form_error.style.display = "block"
                return false
            }
            else if(e_char == false)
            {            
                form_error.innerHTML = "Password length must be atleast 8 characters"
                form_error.style.display = "block"
                return false
            }        
            else if(validAltEmail == false)
            {                                
                form_error.innerHTML = "Alternate email is in incorrect format"
                    form_error.style.display = "block"                     
                    return false;
            }
        }    
        else
        {
            form_error.innerHTML = "All fields are required"
            form_error.style.display = "block"
        }
    }
    else{
        form_error.innerHTML = "Invalid user"
        form_error.style.display = "block"
    }
})



// $.ajax({
//     type: "GET",
//     url: "email/useremailcron.php",    
//     success: function(response) {    
//         console.log(response)                
//         // let startIndex = response.indexOf("[");
//         // let endIndex = response.lastIndexOf("]") + 1;
//         // let jsonString = response.substring(startIndex, endIndex);        
//         // var data = JSON.parse(jsonString)    

//         // console.log(data)                                                         
//     }                
// }); 
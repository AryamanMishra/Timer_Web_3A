const btn = document.getElementById('submit')

const timer = document.getElementById('timer')


// timer functionality
let invalid_atempts = 0
function invalid_at() {
    if (invalid_atempts >= 3) {
        alert ('Too many failed attempts please try after 5 minutes')
        btn.disabled = true;
        setTimeout(() => {
            btn.disabled = false; 
            btn.style.opacity = 1
            btn.style.cursor = "pointer"
            timer.hidden = true
        },1000 *60)
        btn.style.opacity = 0.50
        btn.style.cursor = "not-allowed"
        timer.innerHTML = 5 + ":" + 00
        startTimer();

        timer.hidden = false
        function startTimer() {            
            var presentTime = timer.innerHTML;
            var timeArray = presentTime.split(/[:]+/);

            var m = timeArray[0];
            var s = checkSecond((timeArray[1] - 1));
            if (s == 59) 
                m = m - 1
            if (m < 0)
                return
            
            timer.innerHTML = m + ":" + s;
            setTimeout(startTimer, 1000);
        }
        function checkSecond(sec) {
            if (sec < 10 && sec >= 0) 
                sec = "0" + sec 
            if (sec < 0) 
                sec = "59"
            return sec;
        }
    }
}


// required validations
btn.addEventListener("click", (e) => {

    e.preventDefault()

    let email = document.forms['login_form']['email'].value
    console.log(email)
    let password = document.forms['login_form']['password'].value
    if (email.length >= 5 && email.length <= 20) {
        
        if (email.charAt(0) >= 'a' && email.charAt(0) <= 'z') {
            if (password.length >= 8) {
                let control_character = /[!@#$%&]+/
                if (password.match(control_character)) {
                    alert('Login Successful')
                    return      
                }
                else {
                    alert('Password should contain atleast one special character')
                    ++invalid_atempts
                    invalid_at()
                    return
                }
            }
            else {
                alert('Password should be minimum 8 characters')
                ++invalid_atempts
                invalid_at()
                return
            }
        }
        else {
            alert('Email should start with an alphabet')
            ++invalid_atempts
            invalid_at()
            return
        }
    } 
    else {
        alert('Email length should be between 5 and 20')
        ++invalid_atempts
        invalid_at()
        return
    }
})


    
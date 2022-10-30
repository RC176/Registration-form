function validate (){
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let mobileInput = document.getElementById('mobile').value
    let countryInput = document.getElementById('country').value
    let genderCheck = document.querySelector('input[name = "gender"]:checked');
    let error = false

    function notContainsNumbers(str) {
        return !(/[0-9]/.test(str));
    }

    function containsNumbers(str) {
        return /[0-9]/.test(str);
    }

    if(firstNameInput.length >= 3 && notContainsNumbers(firstNameInput))
    {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }
    if(lastNameInput.length >= 3 && notContainsNumbers(lastNameInput)){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }
    if(emailInput && emailInput.includes('@') && emailInput.includes('.') && emailInput.lastIndexOf('.') <= emailInput.length -3 && emailInput.lastIndexOf('@') !== 0){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }
    if(mobileInput.length == 10 && containsNumbers(mobileInput) && parseInt(mobileInput.charAt(0)) > 5)
    {
        document.getElementById('mobile-valid').style.display = 'block'
        document.getElementById('mobile-invalid').style.display = 'none'
    }
    else{
        document.getElementById('mobile-invalid').style.display = 'block'
        document.getElementById('mobile-valid').style.display = 'none'
        error = true
    }
    if(genderCheck){
        document.getElementById('gender-invalid').style.display = 'none'
    }
    else{
        document.getElementById('gender-invalid').style.display = 'block'
        error = true
    }
    if(countryInput !== 'None'){
        document.getElementById('country-valid').style.display = 'block'
        document.getElementById('country-invalid').style.display = 'none'
    }
    else{
        document.getElementById('country-invalid').style.display = 'block'
        document.getElementById('country-valid').style.display = 'none'
        error = true
    }
    if(!error){
        alert('Your data is saved successfully')
        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('country').value = 'None'
        document.getElementById('mobile').value = ''
        document.getElementById('gridRadios1','gridRadios2', 'gridRadios3').checked = false

        
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('country-valid').style.display = 'none'
        document.getElementById('mobile-valid').style.display = 'none'
        document.getElementById('gender-valid').style.display = 'none'
    }
}

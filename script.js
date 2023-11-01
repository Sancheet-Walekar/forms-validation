
var fname = 0;
var lname = 0;
var email = 0;
var phoneno = 0;
var file2 = 0;
var i = 0;
$(document).ready(function () {
    
    // regex
    var namePattern = /^[A-Za-z\s]+$/;
    var phonePattern = /^[0-9]+$/;
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    // disable the submit button
    $(':input[type="submit"]').prop('disabled', true);
    console.log("loaded");


    $('#fname,#lname,#phoneno, #email ').on('input', function () {
        var field = $(this).attr('name'); //name attribute of input field
        var value = $(this).val(); // value of input field

        switch (field) {
            case 'fname':
                if (!namePattern.test(value)) { //checks whether value matches the regex if matches it clears the error and sets fname to 1
                    $('#fname-error').text('First Name should contain only characters.'); 
                    fname = 0;
                } else {
                    $('#fname-error').text('');
                    fname = 1;
                }   
                break;
            case 'lname':
                if (!namePattern.test(value)) {
                    $('#lname-error').text('Last Name should contain only characters.'); 
                    lname = 0;
                } else {
                    $('#lname-error').text(''); 
                    lname = 1;
                }
                break;
            case 'phoneno':

                if (value !== '' && !phonePattern.test(value)) {
                    $('#phoneno-error').text('Phone number should only contain numbers.'); 
                    phoneno = 0;
                  }
                else {
                    $('#phoneno-error').text('');
                    phoneno = 1;
                }
                break;
            case 'email':
                if (value !== '' && !emailPattern.test(value)) {
                    $('#email-error').text('Invalid email address.'); 
                    email = 0;
                } else {
                    $('#email-error').text(''); 
                    email = 1;
                }
                break;
            default:
                break;
        }

    });

    $('#fname,#lname, #email, #phoneno').on('input', function () {

        if (fname && lname && email && phoneno && file2) {

            $(':input[type="submit"]').prop('disabled', false);
        }
        else {
            $(':input[type="submit"]').prop('disabled', true);
        }

    });

    // $('#phoneno').on('change', function () {

    // });

    $('#file').on('change', function () {
        var file = this.files[0];
        if (file) 
        {
            var fileType = file.type;
            var fileSize = file.size;
            var validTypes = ["image/jpeg", "image/png", "image/jpg"];
            var maxSize = 2 * 1024 * 1024; // 2MB

            if (validTypes.indexOf(fileType) === -1) {
                $('#file-error').text('Invalid file type. Only JPG ,JPEG and PNG allowed.');
            } else if (fileSize > maxSize) {
                $('#file-error').text('File size exceeds the limit (2MB).'); 
                file2 = 0;

            } else {
                file2 = 1;
                $('#file-error').text('File Uploaded').css('color', 'blue');   
                if (fname && lname && email && phoneno) { 
                    $(':input[type="submit"]').prop('disabled', false);
                }
                else {
                    $(':input[type="submit"]').prop('disabled', true);

                }
            }

        }
    });

});

//for number field
function onlyNumberKey(evt) 
{
    var p = evt.keyCode;
    i = $('#phoneno').val().length;
    if (i != 10) {
        return (p > 47 && p < 58);
    }
    else {
        return (false);
    }

}
//blockingf special characters for name
function blockSpecialChar(e) {
    var k = e.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || (k >= 48 && k <= 57));
}

function onlyAlpha(a) {
    var t = a.keyCode;
    console.log(t);
    return ((t > 64 && t < 91) || (t > 96 && t < 123));
}




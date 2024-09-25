const form = document.querySelector('form')
const fullname = document.getElementById('name')
const mail = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

function sendEmail(){
    const bodyMessage = `Full Name: ${fullname.value} <br> Email: ${mail.value} <br>
    Subject: ${subject.value} <br> Message: ${message.value} <br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "seemanth.kurapati@gmail.com",
        Password : "F048CDC4A0B0E97AE9E84074801D985C34B4",
        To : 'seemanth.kurapati@gmail.com',
        From : "seemanth.kurapati@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
    message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
    }
    );
}



function displayErrorMessage(element, message) {
    const errorElement = document.createElement('div');
    errorElement.innerHTML = message;
    errorElement.classList.add('error-message');
    errorElement.style.color = 'red'; // Set color to red
    element.parentElement.appendChild(errorElement);
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear existing error messages
    clearErrorMessages();

    // Validate form fields
    if (fullname.value.trim() === '') {
        displayErrorMessage(fullname, 'Full name cannot be empty');
        return;
    }

    if (mail.value.trim() === '') {
        displayErrorMessage(mail, 'Email cannot be empty');
        return;
    }

    if (subject.value.trim() === '') {
        displayErrorMessage(subject, 'Subject cannot be empty');
        return;
    }

    if (message.value.trim() === '') {
        displayErrorMessage(message, 'Message cannot be empty');
        return;
    }

    // If all fields are filled, proceed to send email
    sendEmail();
});


function toggleMenu() {
    var links = document.querySelector('.link ul');
    links.classList.toggle('active');
}

const slices = document.querySelectorAll('.slice');
const tooltip = document.querySelector('.tooltip');

slices.forEach(slice => {
    slice.addEventListener('mouseenter', function() {
        tooltip.textContent = this.getAttribute('data-tooltip');
    });

    slice.addEventListener('mousemove', function(e) {
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = e.pageY - 40 + 'px'; // Adjust position if needed
    });

    slice.addEventListener('mouseleave', function() {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = 0;
    });
});
function toggleSkills(categoryElement) {
    const details = categoryElement.querySelector('.skills-details');
    const arrow = categoryElement.querySelector('.arrow');

    if (categoryElement.classList.contains('active')) {
        details.style.display = 'none';
        categoryElement.classList.remove('active');
    } else {
        details.style.display = 'block';
        categoryElement.classList.add('active');
    }
}

//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +  ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        
       
    }); 

   
    // sticly header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
  
    // remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer = document.querySelector('footer');
    
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight - 50);


}

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail()
{
    const bodyMessage = `Full Name : ${fullName.value}<br> Email : ${email.value}<br> Phone Number: ${phone.value} <br> Message : ${mess.value}`;
    


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anurag2006.paul@gmail.com",
        Password : "2C01C2B6BACFEB70CF03C9BF67B2FE4B2F92",
        To : 'anurag2006.paul@gmail.com',
        From : "anurag2006.paul@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK")
        {
            Swal.fire({
                title: "Successfully submitted!",
                text: "Your message will be reviewed shortly!",
                icon: "success"
              });
        }
        else
        {
            Swal.fire({
                title: "Whoops!",
                text: "Unfortunately there are some network issues on our side please try again later",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});

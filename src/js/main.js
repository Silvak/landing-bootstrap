import "../css/styles.scss";
import "../css/main.css";

//header
window.addEventListener("scroll", function () {
  let topHead = document.getElementById("tophead");
  let topHeadLinks = topHead.querySelectorAll("a"); // Selecciona todos los <a> dentro de tophead
  let header = document.getElementById("head");

  if (window.scrollY > 42) {
    topHead.style.backgroundColor = "#fff";
    topHeadLinks.forEach(function (link) {
      link.style.color = "#02557d"; // Eliminar !important ya que no es necesario en JavaScript
    });
    header.style.backgroundColor = "#02557D";
  } else {
    topHead.style.backgroundColor = "#02557d";
    topHeadLinks.forEach(function (link) {
      link.style.color = "#fff";
    });
    header.style.backgroundColor = "transparent";
  }
});

//form
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var recipient = "silvak.jeg@gmail.com";

    var mailtoLink =
      "mailto:" +
      recipient +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(
        "Name: " +
          name +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "Phone: " +
          phone +
          "\n" +
          "Message: " +
          message
      );
    window.location.href = mailtoLink;
  });

//
console.log(`
 _______________________________📌
|                               |
|     Development by Silvak     |
|    For technical work test    | 
|            May 2024           |
|_______________________________|

Mail   📫: silvak.jeg@gmail.com
Github 🗃️: https://github.com/Silvak  


`);

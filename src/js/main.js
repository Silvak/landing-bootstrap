import "../css/styles.scss";
import "../css/main.css";
import $ from "jquery";

//_________________________________________________form_______________________________________________
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

function openMailApp() {
  const emailInput = document.getElementById("emailInput").value;
  if (emailInput) {
    const mailtoLink = `mailto:${emailInput}`;
    window.location.href = mailtoLink;
  } else {
    alert("Please enter a valid email address.");
  }
}

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

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

// ________________________________________ team carousel _____________________________________________
$(document).ready(function () {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item").eq(i).appendTo(".carousel-inner");
        } else {
          $(".carousel-item").eq(0).appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
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

//import initTilt from "./js/tilt";
import initSr from "./js/sr";
import initTheme from "./js/dark-mode-switch";
import resume from "./assets/sungwoolee-resume.pdf";
import "./style/main.scss";

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: target.offset().top,
      },
      1000
    );
  }
});

function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

initSr();
//initTilt();
initTheme();

// uncomment this if you want to attach your resume
addResume(resume);

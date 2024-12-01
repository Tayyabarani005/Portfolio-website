document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded");
  
    const profileImg = document.querySelector(".profile-img");
    if (profileImg) {
      profileImg.addEventListener("mouseover", () => {
        profileImg.style.transform = "rotate(360deg)";
        profileImg.style.transition = "transform 1s";
      });
      profileImg.addEventListener("mouseout", () => {
        profileImg.style.transform = "rotate(0deg)";
      });
    } else {
      console.error("Profile image not found!");
    }
  });
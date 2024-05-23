document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", function () {
    const slider = document.querySelector(".slider");

    if (checkbox.checked && slider.classList.contains("tr")) {
      window.location.href = "trbeerpage.html";
    } else if (checkbox.checked && slider.classList.contains("eng")) {
      window.location.href = "index.html";
    }
  });

  const buttons = document.querySelectorAll(".buttons");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.classList.remove("selected");
        }
      });

      button.classList.add("selected");

      const category = button.getAttribute("data-category");

      showContent(category);
    });
  });

  function showContent(category) {
    const forMargin = document.querySelector(".beer-content");

    var previousMargin = "40px 0 10px 0";

    var newMargin = "10px 0";

    const foodButtons = document.querySelector(".food-containers");

    var allContents = document.querySelectorAll(".beer-content > div");

    allContents.forEach(function (content) {
      content.style.display = "none";
    });

    if (category === "food") {
      foodButtons.style.display = "flex";
      forMargin.style.margin = newMargin;
    } else {
      foodButtons.style.display = "none";
      forMargin.style.margin = previousMargin;
    }

    var selectedContent = document.querySelector(".scroll-" + category);

    if (selectedContent) {
      selectedContent.style.display = "flex";
      var backgroundResimAdi = category + ".png";
      var bodyElementi = document.body;

      bodyElementi.style.backgroundImage = "url('" + backgroundResimAdi + "')";
    }
  }

  function getCategory() {
    buttons.forEach((button) => {
      button.classList.remove("selected");
    });

    let category = window.location.hash.slice(1);

    if (category) {
      showContent(category);
    } else {
      const firstCategory = document.querySelector(
        ".beer-content div:first-child"
      );

      category = firstCategory.classList[0].split("-")[1];

      showContent(category);
    }

    const categoryButton = document.querySelector(
      "[data-category='" + category + "']"
    );

    categoryButton.classList.add("selected");

    categoryButton.scrollIntoView();
  }

  getCategory();

  window.addEventListener("hashchange", getCategory);
});

function scrollToContent(contentId) {
  var targetContentDiv = document.getElementById(contentId);

  targetContentDiv.scrollIntoView({ behavior: "smooth" });
}
function showAlertOnClick() {
  var searchInput = document.querySelector(".search-place");
  var searchText = searchInput.value.trim();
  alert("You entered: " + searchText);
}

function showAlertOnSubmit() {
  var searchInput = document.querySelector(".search-place");
  var searchText = searchInput.value.trim();

  if (searchText !== "") {
    alert("You entered: " + searchText);
  }
}

window.onload = () => {
  var select = document.querySelector(".glide");
  var select2 = document.querySelector(".glide2");

  var glide = new Glide(".glide", {
    type: select.value,
    focusAt: "center",
    type: "carousel",
    startAt: 0,
    perView: 1,
  });

  var glide2 = new Glide(".glide2", {
    type: "carousel",
    focusAt: 0,
    startAt: 0,
    perView: 4,
    gap: 30,
    breakpoints: {
      1500: {
        startAt: 0,
        perView: 3,
        dragThreshold: 120,
      },
      900: {
        startAt: 0,
        perView: 2,
        dragThreshold: 120,
      },
      750: {
        startAt: 0,
        perView: 1,
        dragThreshold: 120,
      },
    },
  });

  select.addEventListener("change", function (event) {
    glide.update({
      type: event.target.value,
    });
  });

  select2.addEventListener("change", function (event) {
    glide2.update({
      type: event.target.value,
    });
  });

  glide.mount();
  glide2.mount();
};

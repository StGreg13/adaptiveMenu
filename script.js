$(document).ready(function () {
  console.log("document is ready");
  let btn = $("#menu-btn");
  let nav = $("#menu-nav");

  $("#menu-btn").click(function () {
    console.log("click"), nav.toggleClass("hidden");
  });
});

$(function () {
  const token = sessionStorage.getItem("token");
  if (!token) {
    window.location.href = "./index.html";
  }
  const user = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : {};
  $("#userName").text(user.name);
  $(".header .fr").click(() => {
    clickSelect();
  });

  function clickSelect() {
    $("#select").hasClass("active")
      ? $("#select").removeClass("active")
      : $("#select").addClass("active");
  }
  function clearToken() {
    sessionStorage.setItem("user", "");
    sessionStorage.setItem("token", "");
  }
  $("#select ").on("click", ".item", function (e) {
    e.preventDefault();
    clearToken()
    window.location.href = "./index.html";
  });
  $("#getDataTeacher").click(() => {
    debounce(getTeacher(), 1000);
  });
})
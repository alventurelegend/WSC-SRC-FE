const Back = document.getElementsByClassName("back-button");
this.nama = localStorage.getItem("namauser");

if (Back) {
  addEventListener("click", () => {
    window.location.href =
      "https://wscsidoharjo.page.gd/leaderboard.php?username=" + encodeURIComponent(nama);
  });
}

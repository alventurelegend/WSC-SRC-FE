const nameuser = localStorage.getItem("namauser");
const usernameElement = document.getElementById("username");

if (nameuser) {
  if (nameuser === "alga") {
    // Jika admin, arahkan kealga halaman admin
    window.location.href = "../../component/page/admin.html";
  } else {
    // Kalau bukan admin, tampilkan username
    if (usernameElement) {
      usernameElement.value = nameuser;
    }
  }
} else {
  // Kalau belum login, arahkan ke halaman login
  window.location.href = "../src/component/page/login.html";
}

const form = document.querySelector(".login-form");
const usernameInput = document.getElementById("loguser");
const nama = document.getElementById("username");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form disubmit");

  const formData = new FormData(this);
  fetch("https://wscsidoharjo.page.gd/login.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Server error");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Respon dari PHP:", data);
      if (data.status === "success") {
        // MENGAMBIL NAMA
        const nameuser = nama.value;
        localStorage.setItem("namauser", nameuser);
        console.log("Menampilkan", localStorage);
        // SWALL FIRE
        Swal.fire({
          toast: true,
          position: "center",
          icon: "success", // bisa diganti 'info', 'error', atau hapus untuk clean
          title: "Login Berhasil!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: "#ffffff",
          color: "#111827",
          customClass: {
            popup: "modern-toast",
            title: "modern-title",
            timerProgressBar: "modern-progress",
          },
        }).then(() => {
          window.location.href =
            "https://wscsidoharjo.page.gd/dashboard.php?username=" +
            encodeURIComponent(nameuser);
        });

        this.reset();
      } else if (data.status === "passerror") {
        Swal.fire({
          toast: true,
          position: "center",
          icon: "error",
          title: "Password Salah",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          background: "#ffffff",
          color: "#ce0000ff",
          customClass: {
            popup: "modern-toast",
            title: "modern-title",
            timerProgressBar: "modern-progress",
          },
        });
      } else if (data.status === "EmailError") {
        Swal.fire({
          toast: true,
          position: "center",
          icon: "error",
          title: "Username Salah",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          background: "#ffffff",
          color: "#ce0000ff",
          customClass: {
            popup: "modern-toast",
            title: "modern-title",
            timerProgressBar: "modern-progress",
          },
        });
      } else if (data.status === "admin") {
        const nameuser = nama.value;
        localStorage.setItem("namauser", nameuser);
        console.log("Menampilkan", localStorage);
        // SWALL FIRE
        Swal.fire({
          toast: true,
          position: "center",
          icon: "success",
          title: "Welcome Admin",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: "#ffffff",
          color: "#000000ff",
          customClass: {
            popup: "modern-toast",
            title: "modern-title",
            timerProgressBar: "modern-progress",
          },
        }).then(() => {
          window.location.href = "../../component/page/admin.html";
        });

        this.reset();
      }
    })
    .catch((err) => {
      console.error("Gagal kirim:", err);
      Swal.fire({
        icon: "error",
        title: "Terjadi kesalahan!",
        text: "Coba lagi nanti.",
        confirmButtonText: "Tutup",
      });
    });
});

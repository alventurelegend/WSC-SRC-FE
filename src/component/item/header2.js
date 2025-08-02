class Myheader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.nama = localStorage.getItem("namauser");

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
       
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        header {
          background-color: rgba(255, 255, 255, 1);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 20px 50px;
          box-sizing: border-box;
          position: fixed;
          top: 0;
          z-index: 1000;
          transition: background-color 0.3s ease-in-out;
        }

        .header-scrolled {
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 1em;
        }

        .logo img {
          width: 50px;
          height: auto;
        }

        .logo .title {
          display: flex;
          flex-direction: column;
        }

        .logo h4 {
          color: #319bff;
          font-size: 1.2rem;
          line-height: 1;
        }

        .logo h3 {
          color: #002f94;
          font-size: 1.4rem;
          line-height: 1;
        }

        .button {
          display: flex;
          align-items: center;
        }

        .btn1 {
          text-align: center;
          padding: 0.8rem 1rem;
          color: black;
          width: auto;
          margin-right: 0.5rem;
          border: none;
          font-size: 1rem;
          background-color: transparent;
        }

        .btn2 {
          text-align: center;
          padding: 1rem 1rem;
          border-radius: 50px;
          border: 1.5px solid rgb(88, 88, 88);
          background-color: #ffffff;
          color: rgb(88, 88, 88);
          width: 9.375rem;
          z-index: 1;
          transition: color 0.3s, background-color 0.3s ease-in;
        }

        .btn2:hover {
          background-color: #e2e2e2;
        }

        .btn2:active {
          background-color: #747474;
          color: white;
        }

        @media (max-width: 1023px) {
          header {
            padding: 15px 30px;
          }
          .logo img {
            width: 45px;
          }
          .logo h4 {
            font-size: 1rem;
          }
          .logo h3 {
            font-size: 1.2rem;
          }
          .btn1 {
            width: 5.5rem;
            margin-right: -2.2rem;
          }
          .btn2 {
            width: 8rem;
            padding-left: 35px;
          }
        }

        @media (max-width: 768px) {
          header {
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 15px;
          }
          .logo img {
            width: 40px;
          }
          .logo h4 {
            font-size: 0.8rem;
          }
          .logo h3 {
            font-size: 1rem;
          }
          .button {
            flex-direction: row;
            gap: 0.4rem;
          }
          .btn1,
          .btn2 {
            padding: 0.5rem 0.7rem;
            min-width: unset;
            width: 5rem;
            font-size: 0.75rem;
            margin-right: 0;
            padding-left: 0.7rem;
          }
        }
      </style>
      <header id="main-header">
        <div class="logo">
          <img src="../src/public/asset/WcsLogo.png" alt="Logo" width="100px"/>
          <div class="title">
            <h4>WEKLY SCOUT</h4>
            <h3>CHALENGGE</h3>
          </div>
        </div>
        <div class="button">
          <input class="btn1" type="text" value="Hai, ${this.nama}" id="username" readonly/>
          <input class="btn2" type="submit" value="Logout" id="btnout" />
        </div>
      </header>
    `;

    const headerElement = this.shadowRoot.getElementById("main-header");
    const btnusername = this.shadowRoot.getElementById("username");

    const btnlogout = this.shadowRoot.getElementById("btnout");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        headerElement.classList.add("header-scrolled");
      } else {
        headerElement.classList.remove("header-scrolled");
      }
    });

    if (btnlogout) {
      btnlogout.addEventListener("click", function () {
        Swal.fire({
          title: "Apakah Anda yakin ingin logout?",
          text: "Anda akan keluar dari sesi Anda saat ini.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya, Logout!",
          cancelButtonText: "Tidak",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("Pengguna mengkonfirmasi logout.");
            localStorage.clear();
            Swal.fire({
              title: "Berhasil Logout!",
              text: "Anda telah berhasil keluar.",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            }).then(() => {
              window.location.href = "../src/index.html";
            });
          } else {
            console.log("Pengguna membatalkan logout.");
            Swal.fire("Dibatalkan", "Anda tetap masuk.", "info");
          }
        });
      });
    }
  }
}
customElements.define("my-header", Myheader);

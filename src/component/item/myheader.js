class Myheader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
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
          padding: 0.8rem 1rem;
          border-radius: 50px;
          border: 1.5px solid #4895ef;
          background-color: #4895ef;
          color: white;
          width: 6.25rem;
          margin-right: -3rem;
          z-index: 2;
          transition: border 0.3s, background-color 0.3s ease-in;
        }

        .btn1:hover {
          background-color: #007fc4;
          border: 1.5px solid #007fc4;
        }

        .btn1:active {
          background-color: #002f94;
          border: 1.5px solid #002f94;
        }

        .btn2 {
          padding: 0.8rem 1rem;
          border-radius: 50px;
          border: 1.5px solid rgb(88, 88, 88);
          background-color: #ffffff;
          color: rgb(88, 88, 88);
          width: 9.375rem;
          z-index: 1;
          padding-left: 50px;
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
            width: auto;
            font-size: 0.75rem;
            margin-right: 0;
            padding-left: 0.7rem;
          }
        }
      </style>
      <header id="main-header">
        <div class="logo">
          <img src="public/asset/WcsLogo.png" alt="Logo" width="100px" />
          <div class="title">
            <h4>WEKLY SCOUT</h4>
            <h3>CHALENGGE</h3>
          </div>
        </div>
        <div class="button">
          <input class="btn1" type="submit" value="Login" id="btnlogin"/>
          <input class="btn2" type="submit" value="Register" id="btnregis" />
        </div>
      </header>
    `;

    const headerElement = shadow.getElementById("main-header");
    const btnLogin = shadow.getElementById("btnlogin");
    const btnRegis = shadow.getElementById("btnregis");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        headerElement.classList.add("header-scrolled");
      } else {
        headerElement.classList.remove("header-scrolled");
      }
    });
    if (btnLogin) {
      btnLogin.addEventListener("click", () => {
        window.location.href = "/component/page/login.html";
      });
    }
    if (btnRegis) {
      btnRegis.addEventListener("click", () => {
        window.location.href = "/component/page/registrasi.html";
      });
    }
  }
}

customElements.define("my-header", Myheader);

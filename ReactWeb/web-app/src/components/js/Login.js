import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const SliderLogin = () => {
  const navigate = useNavigate();
  // İnputlardan Gelen Veriyi Al
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hata Mesajı
  const [error, setError] = useState("");
  
  // Login ve Araç Axios'larından Gelen Verileri Al
  const [ver, setuser] = useState("");
  const [Ver, setveri] = useState([]);
  
  // Axios'larda Sonsuz Döngü Olmaması İçin Yapılan Construction
  const [isLoading, setIsLoading] = useState(true);

  // Slider İçin İleri Geri Butonları
  let imageContainerRef = useRef(null);
  const prev = () => (imageContainerRef.current.scrollLeft -= 250);
  const next = () => (imageContainerRef.current.scrollLeft += 250);

  // Login Kontrolünün Yapıldığı Construction
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:61334/login/" + email + "?password=" + password,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.statusText === "OK") {
        throw new Error("Network response was not ok");
      } else {
        const a = axios
          .post(
            "http://localhost:61334/Email/" + email + "?password=" + password
          )
          .then((repo) => {
            setuser(repo.data);
            localStorage.setItem("token", repo.data.token);
            let a = new Promise((resolve) => {
              resolve();
            });
          });
        a.then(() => {
          navigate("/Home");
        }).catch(() => {
          alert("Girilen Bilgiler Hatalı!");
          navigate("/Login");
        });
      }
    } catch (error) {
      // Hata durumu
      alert("Hatalı E-Posta / Şifre Giriniz !");
      setError("Giriş başarısız. Lütfen tekrar deneyin.." + error);
    }
  }; 

  // Sayfa Açıldığında Satışta Olan Araçları Listeleme
  // Sayfa Açıldığında Eğer LocalStorage de Token varsa sil
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      return; // Exit if token exists and has been removed
    }
    const fetchData = async () => {
      try {
        axios.get("http://localhost:61334/Sold/1").then((res) => {
          setveri(res.data);
        });
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    if (isLoading) {
      fetchData();
    }
  });

  return (
    <div>
      <h3 >
        {
          Ver === null || Ver === "" || Ver === undefined || (Array.isArray(Ver) && Ver.length === 0) ? (
            <p className="baslikH3Red">Satışta Araç Yok</p>
          ):(
            <p className="baslikH3">Satışta Olan Araçlar</p>
          )}
      </h3>
      <div className="page-container">
        <div className="content">
          <div className="prev" onClick={prev}></div>
          <div className="slide-panel" ref={imageContainerRef}>
            {Ver.map((image) => {
              return (
                <img
                  src={image.img}
                  height={250}
                  title={image.carName + " " + image.carModelName}
                />
              );
            })}
          </div>
          <div className="next" onClick={next}></div>
        </div>
      </div>
      {/* {error && <p>{error}</p>} */}
      <div className="home">
        <form onSubmit={handleSubmit}>
          <div className="kutu-login">
            <label>E-Mail</label>
            <br/>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="kutu-login">
            <label>Şifre</label>
            <br/>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="kutu-login">
            <button type="submit">Giriş Yap</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SliderLogin;

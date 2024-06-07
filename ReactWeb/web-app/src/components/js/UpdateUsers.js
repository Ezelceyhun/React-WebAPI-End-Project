import React, { useEffect, useState } from "react";
import "../css/UpdateUser.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUsers = () => {
  const bugun = new Date();

  const location = useLocation();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const { gelenId } = location.state || {};

  // İlgili User Bilgileri Yükleyen Axios
  useEffect(() => {
    axios
      .get("http://localhost:61334/User/" + gelenId)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {});
  }, []);

  // Inputlarda ki Değerleri Al
  const [Name, setname] = useState("");
  //const [Totalcarunsold] = useState("");
  const [Email, setemail] = useState("");
  const [Password, setpassword] = useState("");

  let a = "";
  let b = "";
  let c = "";
  let TotalCarSold;
  // User Bilgilerini Güncelleme Construction'ı
  const updateButon = async (e) => {
    if (Name === null || Name === "") {
      a = user.name;
    } else {
      a = Name;
    }
    if (Email === null || Email === "") {
      b = user.email;
    } else {
      b = Email;
    }
    if (Password === null || Password === "") {
      c = user.password;
    } else {
      c = Password;
    }
    TotalCarSold = user.totalCarUnsold;

    e.preventDefault();
    try {
      axios
        .put("http://localhost:61334/UpdateUser/" + gelenId, {
          id: gelenId, //bunları inputlardan çek inputlar boş bırakıldıysa önceki değerleri kalsın
          name: a,
          email: b,
          password: c,
          totalCarUnsold: TotalCarSold,
          lastLoginTime: bugun, //anlık zamanı çeker
        })
        .then((response) => {
          //   başarılı
          navigate("/Login");
        })
        .catch((error) => {
          //   error
        });
    } catch (error) {}
  };

  // Değişiklik Yapmak İstediğinde İlgili Label Üzerine Tıklayınca Açılan Input Construction'ları
  const [nameInputVisibility, setNameInputVisibility] = useState(false);
  const [emailInputVisible, setEmailInputVisible] = useState(false);
  const [passInputVisible, setPassInputVisible] = useState(false);
  const handleNameLabelClick = () => {
    setNameInputVisibility(true);
  };
  const handleEmailLabelClick = () => {
    setEmailInputVisible(true);
  };
  const handlePassLabelClick = () => {
    setPassInputVisible(true);
  };

  // Home Sayfasına Yönlendirme
  const GeriDonButton = () => {
    navigate("/Home");
  };
  return (
    <div>
      <div className="GeriDonButtonUser">
        <button className="GeriDonUser" onClick={GeriDonButton}>
          Geri Dön
        </button>
      </div>
      <h3>Kullanıcı Güncelleme</h3>
      <h4>GÜNCELLEMEK İSTEDİĞİNİZ VERİNİN ÜZERİNE TIKLAYIN</h4>
      <div className="updateuser">
        <div className="tableClass">
          <form>
            <table border={1} className="Table" align="center">
              <tr>
                <th>Id</th>
                <th>AD</th>
                <th>E-Posta</th>
                <th>Şifre</th>
              </tr>

              {user && (
                <tr>
                  <td>{user.id}</td>
                  <td>
                    <label onClick={handleNameLabelClick}>{user.name}</label>
                    <br />
                    {nameInputVisibility && (
                      <input
                        type="text"
                        placeholder="Adınızı Girin."
                        value={Name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    <label onClick={handleEmailLabelClick}>{user.email}</label>
                    <br />
                    {emailInputVisible && (
                      <input
                        type="email"
                        placeholder="E-Posta Girin."
                        value={Email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    <label onClick={handlePassLabelClick}>
                      {user.password}
                    </label>
                    <br />
                    {passInputVisible && (
                      <input
                        type="password"
                        placeholder="Şifre Girin."
                        value={Password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    )}
                  </td>
                </tr>
              )}
            </table>
            <button className="kutubotton" type="submit" onClick={updateButon}>
              GÜNCELLE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateUsers;

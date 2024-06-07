import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function LoginMain() {
  // Anlık Tarih
  const bugun = new Date();
  
  const navigate = useNavigate();
  
  const location = useLocation();

  const navigateCar = useNavigate();

  const [Ver, setVeri] = useState([]);

  const [userVer, setuserVer] = useState([]);
 
  const [isLoading, setIsLoading] = useState(true);

  // Local de tutulan Token'ı Decode Edip Bilgilerini Kullanma
  let localtoken = localStorage.getItem("token");
  let userToken = jwtDecode(localtoken);
  let localSmail = userToken.UserEmail;
  let localSpas = userToken.UserPassword;
  let localname = userToken.UserName;
  let localId = userToken.UserId;

  // Gelen Token Bilgisine Göre Kullanıcıyı ve Sahip Olduğu Araçları Listeleme
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .post(
            "http://localhost:61334/login/" +
              localSmail +
              "?password=" +
              localSpas
          )
          .then((res) => {
            setVeri(res.data);
          });

        axios.get("http://localhost:61334/User/" + localId).then((resp) => {
          setuserVer(resp.data);
        });
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  // Satışa Çıkar Axios'u
  const handleSatButton = async (
    selectedId,
    selectedName,
    selectedPrice,
    selectedModel,
    userid,
    username,
    usermail,
    userpas,
    usertotalsold,
    selectedimg,
    e
  ) => {
    e.preventDefault();

    let totalUnsold = usertotalsold - 1;

    try {
      axios
        .put("http://localhost:61334/SelectCar/" + selectedId, {
          idMore: selectedId,
          carName: selectedName,
          price: selectedPrice,
          lastDateTime: bugun,
          sold: 1,
          carModelName: selectedModel,
          ownerUserId: userid,
          img: selectedimg,
          customerUser: {
            id: userid,
            name: username,
            email: usermail,
            password: userpas,
            totalCarUnsold: totalUnsold,
            lastLoginTime: bugun,
          },
        })
        .then((respons) => {
          setIsLoading((prev) => !prev);
        })
        .catch((error) => {});
    } catch (error) {}
  };

  // Kullanıcıyı Güncelleme Construction 
  const handleSubmitUpdate = async (id) => {
    //e yerine id gelicekmiş
    navigate("/UpdateUsers", { state: { gelenId: id } });
  };

  // İlgili Aracı Güncelleme Construction
  const handleSubmitCarUpdate = async (CarId, event) => {
    //ilgili satırda ki id'yi çekmek için kullan
    event.preventDefault();

    localStorage.setItem("gelencarid", CarId);
    navigateCar("/UpdateCar");
  };

  // Yeni Kullanıcı Ekleme Sayfasına Yönlendirme
  const buttonCreateUser = async () => {
    navigate("/CreateUser");
  };

  // Yeni Araç Oluşturma Sayfasına Yönlendirme
  const buttonCreateCar = async () => {
    navigate("/CreateCar");
  };

  // Satışta Olan Araçları Ekleme Sayfasına Yönlendirme
  const buttonAddCar = async (
    userId,
    username,
    usermail,
    userpass,
    usertotal,
    event
  ) => {
    navigate("/AddCar", {
      state: {
        gelenCarUserId: userId,
        gelenCarUserName: username,
        gelenCarUserMail: usermail,
        gelenCarUserPass: userpass,
        gelenCarUserTotal: usertotal,
      },
    });
  };

  // Login Sayfasına Yönlendirme
  const girisyap = async () => {
    navigate("/Login");
  };

  // Token'ı Silip Login Sayfasına Yönlendirme
  const oturumukapat = async () => {
    //localname.clear();
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    navigate("/Login");
  };

  // Satışı Onaylama Sayfasına Yönlendirme
  const onaybuttonclick = async (seciliId) => {
    localStorage.setItem("userid", seciliId);
    navigate("/Sales");
  };

  // Geçmiş Satışlar Sayfasına Yönlendirme
  const OldSalesClick = async (seciliId) => {
    localStorage.setItem("userid", seciliId);
    navigate("/OldSales");
  };

  return (
    <div>
      <div className="sayfaBaslik">
        <h1>
          <label className="h1Label">Hoşgeldin {localname}</label>
          <div className="buttons">
            <button className="createbutton" onClick={buttonCreateUser}>
              Create User
            </button>
            <button className="createCarbutton" onClick={buttonCreateCar}>
              Create Car
            </button>
            {userToken === null ? (
              <button className="oturumbuton" onClick={girisyap}>
                Giriş Yap
              </button>
            ) : (
              <button className="oturumbuton" onClick={oturumukapat}>
                Oturumu Kapat
              </button>
            )}
          </div>
        </h1>
      </div>

      <div className="tableClass">
        <table border={1} className="Table" align="center">
          <tr>
            <th>KULLANICI ID</th>
            <th>AD</th>
            <th>E-POSTA</th>
            <th>SATILMAYAN ARAÇ SAYISI</th>
            <th>SON GİRİŞ TARİHİ</th>
            <th>GÜNCELLE</th>
          </tr>

          {userVer && (
            <tr>
              <td key={userVer.id}>
                <label value={userVer.id}>{userVer.id}</label>
              </td>
              <td>{userVer.name}</td>
              <td>{userVer.email}</td>
              <td>{userVer.totalCarUnsold}</td>
              <td>{userVer.lastLoginTime}</td>
              <td>
                <form name="formUser" onSubmit={handleSubmitUpdate}>
                  <button
                    className="updateUserbutton"
                    type="submit"
                    onClick={() => handleSubmitUpdate(userVer.id)}
                  >
                    Güncelle
                  </button>
                </form>
                <button
                  type="submit"
                  className="addCarbutton"
                  onClick={(e) =>
                    buttonAddCar(
                      userVer.id,
                      userVer.name,
                      userVer.email,
                      userVer.password,
                      userVer.totalCarUnsold,
                      e
                    )
                  }
                >
                  Araç Ekle
                </button>
                <form>
                  <button onClick={(e) => OldSalesClick(userVer.id, e)}>
                    Geçmiş
                  </button>
                </form>
                <button onClick={(e) => onaybuttonclick(userVer.id, e)}>
                  Onay Bekleyenler
                </button>
              </td>
            </tr>
          )}
        </table>
      </div>
      <br />

      <div className="tableClass">
        <table border={1} className="Table" align="center">
          <tr>
            <th>ARAÇ ID</th>
            <th>ARAÇ RESİM</th>
            <th>ARAÇ ADI</th>
            <th>ARAÇ MODEL</th>
            <th>FİYAT</th>
            <th>SON EKLENME TARİHİ</th>
            <th>SATILDI/SATILMADI</th>
            <th>GÜNCELLE</th>
          </tr>

          {Ver.map((Ver) => (
            <tr>
              <td key={Ver.idMore}>{Ver.idMore}</td>

              <td>
                <img src={Ver.img} height={90} width={90} />
              </td>

              <td>{Ver.carName}</td>
              <td>{Ver.carModelName}</td>
              <td>{Ver.price} ₺</td>
              <td>{Ver.lastDateTime}</td>
              <td>
                {Ver.sold === 0 ? (
                  <form onSubmit={handleSatButton}>
                    <button
                      className="NotPriceColor"
                      type="submit"
                      onClick={(e) =>
                        handleSatButton(
                          Ver.idMore,
                          Ver.carName,
                          Ver.price,
                          Ver.carModelName,
                          Ver.customerUser.id,
                          Ver.customerUser.name,
                          Ver.customerUser.email,
                          Ver.customerUser.password,
                          Ver.customerUser.totalCarUnsold,
                          Ver.img,
                          e
                        )
                      }
                    >
                      Satışa Çıkart
                    </button>
                  </form>
                ) : (
                  <label className="PriceColor">Satışta</label>
                )}
              </td>
              <td>
                <form name="formCar" onSubmit={handleSubmitCarUpdate}>
                  <button
                    className="updateCarbutton"
                    type="submit"
                    onClick={(e) => handleSubmitCarUpdate(Ver.idMore, e)}
                  >
                    Güncelle
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default LoginMain;

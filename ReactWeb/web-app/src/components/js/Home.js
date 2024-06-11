import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import DataTable from "react-data-table-component";

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
        const respo = await axios
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

  const columns = [
    {
      name: "Araç Resmi",
      selector: (row) => (
        <img
          src={row.img}
          height={60}
          width={60}
          onClick={(e) => detay(row.idMore)}
        />
      ),
      sortable: true,
    },
    {
      name: "Araç Adı",
      selector: (row) => row.carName,
      sortable: true,
    },
    {
      name: "Araç Model",
      selector: (row) => row.carModelName,
      sortable: true,
    },
    {
      name: "Model Yılı",
      selector: (row) => row.modelYears,
      sortable: true,
    },
    {
      name: "Total KM",
      selector: (row) => row.totalKm,
      sortable: true,
    },
    {
      name: "Yakıt Türü",
      selector: (row) => row.fuel,
      sortable: true,
    },
    {
      name: "Vites",
      selector: (row) => row.shift,
      sortable: true,
    },
    {
      name: "Motor Gücü",
      selector: (row) => row.engineHp,
      sortable: true,
    },
    {
      name: "Araç Rengi",
      selector: (row) => row.carColor,
      sortable: true,
    },
    {
      name: "Fiyat",
      selector: (row) => row.price + " ₺",
      sortable: true,
    },
    {
      name: "Son Güncelleme Tarihi",
      selector: (row) => row.lastDateTime,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) =>
        row.sold === 0 ? (
          <form onSubmit={handleSatButton}>
            <button
              className="NotPriceColor"
              type="submit"
              onClick={(e) =>
                handleSatButton(
                  row.idMore,
                  row.carName,
                  row.price,
                  row.carModelName,
                  row.fuel,
                  row.shift,
                  row.totalKm,
                  row.carColor,
                  row.engineHp,
                  row.modelYears,
                  row.customerUser.id,
                  row.customerUser.name,
                  row.customerUser.email,
                  row.customerUser.password,
                  row.customerUser.totalCarUnsold,
                  row.img,
                  e
                )
              }
            >
              Satışa Çıkart
            </button>
          </form>
        ) : (
          <label className="PriceColor">Satışta</label>
        ),
      sortable: true,
    },
    {
      name: "Update",
      selector: (row) => (
        <form name="formCar" onSubmit={handleSubmitCarUpdate}>
          <button
            className="updateCarbutton"
            type="submit"
            onClick={(e) => handleSubmitCarUpdate(row.idMore, e)}
          >
            Güncelle
          </button>
        </form>
      ),
      sortable: true,
    },
  ];

  // Satışa Çıkar Axios'u
  const handleSatButton = async (
    selectedId,
    selectedName,
    selectedPrice,
    selectedModel,
    selectedFuel,
    selectedShift,
    selectedTotalKm,
    selectedCarColor,
    selectedEngineHp,
    selectedModelYears,
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
          userBuy: userid,
          modelYears: selectedModelYears,
          totalKm: selectedTotalKm,
          fuel: selectedFuel,
          shift: selectedShift,
          engineHp: selectedEngineHp,
          carColor: selectedCarColor,
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

  const detay = async (seciliCarid) => {
    console.log(seciliCarid);
    localStorage.setItem("gelencar", seciliCarid);
    navigate("/CarDetail");
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
      
      <div className="dataclass">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <DataTable            
            title="Sahip Olunan Araçlar"
            columns={columns}
            data={Ver}
            pagination
          />
        )}

        <br />
      </div>
    </div>
  );
}
export default LoginMain;

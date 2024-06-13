import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
//import DataTable from "react-data-table-component";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

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

  const rows: GridRowsProp = Ver.map((Ver, idMore) => ({
    id: idMore,
    col1: Ver.img,
    col2: Ver.carName,
    col3: Ver.carModelName,
    col4: Ver.modelYears,
    col5: Ver.totalKm,
    col6: Ver.fuel,
    col7: Ver.shift,
    col8: Ver.engineHp,
    col9: Ver.carColor,
    col10: Ver.price,
    col11: Ver.lastDateTime,
    col12: Ver.sold,
    col13: Ver.idMore,       
    col14: Ver.customerUser.id,
    col15: Ver.customerUser.name,
    col16: Ver.customerUser.email,
    col17: Ver.customerUser.password,
    col18: Ver.customerUser.totalCarUnsold,
    col19: Ver            
  }));

  const columns: GridColDef[] = [
    { avatar: "col1", headerName: "ARAÇ RESMİ", width: 120, renderCell: (params) => (
      <img
        src={params.row.col1}
        alt="Araç Resmi"
        onClick={() => detay(params.row.col13)}
        style={{ width: "100%", height: "auto" }}
      /> ),},
    { field: "col2", headerName: "MARKA", width: 90 },
    { field: "col3", headerName: "MODEL", width: 90 },
    { field: "col4", headerName: "MODEL YILI", width: 90 },
    { field: "col5", headerName: "TOPLAM KM", width: 100 },
    { field: "col6", headerName: "YAKIT", width: 80 },
    { field: "col7", headerName: "VİTES", width: 80 },
    { field: "col8", headerName: "MOTOR GÜCÜ", width: 110 },
    { field: "col9", headerName: "ARAÇ RENGİ", width: 110 },
    { field: "col10", headerName: "FİYAT", width: 80 },
    { field: "col11", headerName: "SON GÜNCELLENME TARİHİ", width: 220 },
    { field: "col12", headerName: "SATIŞ DURUMU", width: 120, renderCell: (params) => (
      params.row.col12 === 0 ? (
          <button onClick={(e) => handleSatButton(
          params.row.col13,
          params.row.col2,
          params.row.col10,
          params.row.col3,
          params.row.col6,
          params.row.col7,
          params.row.col5,
          params.row.col9,
          params.row.col8,
          params.row.col4,
          params.row.col14,
          params.row.col15,
          params.row.col16,
          params.row.col17,
          params.row.col18,
          params.row.col1,
          e
        )}>Satışa Çıkart</button>
        
      ) : (
        <label className="PriceColor">Satışta</label>
      )
    ),},
    { field: "col13", headerName: "GÜNCELLEME", width: 120, renderCell: (params) => (
      <button onClick={(e) => handleSubmitCarUpdate(params.row.col13, e)}>
        Güncelle
      </button>
    ),}
  ];

  // Eski Datatable Kullanımı
  // const columns = [
  //   {
  //     name: "Araç Resmi",
  //     selector: (row) => (
  //       <img
  //         src={row.img}
  //         height={60}
  //         width={60}
  //         onClick={(e) => detay(row.idMore)}
  //       />
  //     ),
  //     sortable: true,
  //   },
  //   {
  //     name: "Satış Durumu",
  //     selector: (row) =>
  //       row.sold === 0 ? (
  //         <form onSubmit={handleSatButton}>
  //           <button
  //             className="NotPriceColor"
  //             type="submit"
  //             onClick={(e) =>
  //               handleSatButton(
  //                 row.idMore,
  //                 row.carName,
  //                 row.price,
  //                 row.carModelName,
  //                 row.fuel,
  //                 row.shift,
  //                 row.totalKm,
  //                 row.carColor,
  //                 row.engineHp,
  //                 row.modelYears,
  //                 row.customerUser.id,
  //                 row.customerUser.name,
  //                 row.customerUser.email,
  //                 row.customerUser.password,
  //                 row.customerUser.totalCarUnsold,
  //                 row.img,
  //                 e
  //               )
  //             }
  //           >
  //             Satışa Çıkart
  //           </button>
  //         </form>
  //       ) : (
  //         <label className="PriceColor">Satışta</label>
  //       ),
  //     sortable: true,
  //   },
  //   {
  //     name: "Update",
  //     selector: (row) => (
  //       <form name="formCar" onSubmit={handleSubmitCarUpdate}>
  //         <button
  //           className="updateCarbutton"
  //           type="submit"
  //           onClick={(e) => handleSubmitCarUpdate(row.idMore, e)}
  //         >
  //           Güncelle
  //         </button>
  //       </form>
  //     ),
  //     sortable: true,
  //   },
  // ];

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
          <p>Yükleniyor...</p>
        ) : (
          <DataGrid rows={rows} columns={columns} getRowHeight={() => 'auto'} />
          // <DataTable title="Sahip Olunan Araçlar" columns={columns} data={Ver} pagination/>
        )}
        <br />
      </div>
    </div>
  );
}
export default LoginMain;

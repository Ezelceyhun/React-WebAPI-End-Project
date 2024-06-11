import React, { useEffect, useState, useRef } from "react";
import "../css/UpdateCar.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCar = () => {
  const bugun = new Date();
  const navigate = useNavigate();

  const locationCar = useLocation();
  const [cars, setCar] = useState(null);
  let localgelencarid = localStorage.getItem("gelencarid");

  const [CarURL, setCarURL] = useState("");
  const FileUploadRef = useRef("");
  let CarImgUrl = "";
  // Resim Yükeleme
  const HandleImgUpload = (event) => {
    event.preventDefault();
    FileUploadRef.current.click();
  };
  const UploadImgDisplay = async () => {
    try {
      const UploadedFile = FileUploadRef.current.files[0];

      const formData = new FormData();
      formData.append("file", UploadedFile);
      const imgresponse = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "post",
          body: formData,
        }
      );
      alert("Fotoğraf Yüklendi!");
      if (imgresponse.status === 201) {
        const data = await imgresponse.json();
        setCarURL(data?.location);
        CarImgUrl = data?.location;
      }
    } catch (error) {}
  };

  // Gelen Aracın Bilgilerini Listeleme
  useEffect(() => {
    axios
      .get("http://localhost:61334/Cars/" + localgelencarid)
      .then((res) => {
        setCar(res.data[0]); //parantez içerisine gir

        //setLoading(false);
      })
      .catch((error) => {
        //setError(error);
        //setLoading(false);
      });
  }, []);

  // Araç Bilgileri İçin Değişkenler
  let carprice;
  let name = "";
  let owneruserid;
  let modelname = "";
  let customeruserid;
  let customerusername = "";
  let customeruseremail = "";
  let customeruserpass = "";
  let customerusertotalcar;
  let carcolor = "";
  let carenginehp = "";
  let carshift = "";
  let carfuel = "";
  let carkm = "";
  let carmodelyears = "";

  // Inputlardan Gelen Değerleri Al
  const [CarName, setCarName] = useState("");
  const [CarPrice, setCarPrice] = useState("");
  const [CarModelName, setCarModelName] = useState("");
  const [CarModelYears, setCarModelYears] = useState("");
  const [CarKm, setCarKm] = useState("");
  const [CarFuel, setCarFuel] = useState("");
  const [CarShift, setCarShift] = useState("");
  const [CarEngineHp, setCarEngineHp] = useState("");
  const [CarColor, setCarColor] = useState("");
  // Araç Güncelleme Axios'u
  const UpdateCarButon = async () => {
    if (CarColor === null || CarColor === "") {
      carcolor = cars.carColor;
    } else {
      carcolor = CarColor;
    }
    if (CarEngineHp === null || CarEngineHp === "") {
      carenginehp = cars.engineHp;
    } else {
      carenginehp = CarEngineHp;
    }
    if (CarShift === null || CarShift === "") {
      carshift = cars.shift;
    } else {
      carshift = CarShift;
    }
    if (CarFuel === null || CarFuel === "") {
      carfuel = cars.fuel;
    } else {
      carfuel = CarFuel;
    }
    if (CarKm === null || CarKm === "") {
      carkm = cars.totalKm;
    } else {
      carkm = CarKm;
    }
    if (CarModelYears === null || CarModelYears === "") {
      carmodelyears = cars.modelYears;
    } else {
      carmodelyears = CarModelYears;
    }
    if (CarName === null || CarName === "") {
      name = cars.carName;
    } else {
      name = CarName;
    }
    if (CarModelName === null || CarModelName === "") {
      modelname = cars.carModelName;
    } else {
      modelname = CarModelName;
    }
    if (CarPrice === null || CarPrice === "") {
      carprice = cars.price;
    } else {
      carprice = parseInt(CarPrice);
    }
    if (CarURL === "" || CarURL === undefined || CarURL === null) {
      CarImgUrl = cars.img;
    } else {
      CarImgUrl = CarURL;
    }

    owneruserid = cars.ownerUserId;
    customeruserid = cars.ownerUserId;
    customerusername = cars.customerUser.name;
    customeruseremail = cars.customerUser.email;
    customeruserpass = cars.customerUser.password;
    customerusertotalcar = cars.customerUser.totalCarUnsold;

    //e.preventDefault();
    try {
      axios
        .put("http://localhost:61334/UpdateCar/" + localgelencarid, {
          idMore: localgelencarid,
          carName: name,
          price: carprice,
          lastDateTime: bugun,
          sold: cars.sold,
          carModelName: modelname,
          ownerUserId: owneruserid,
          img: CarImgUrl,
          userBuy: cars.userBuy,
          modelYears: carmodelyears,
          totalKm: carkm,
          fuel: carfuel,
          shift: carshift,
          engineHp: carenginehp,
          carColor: carcolor,
          customerUser: {
            id: customeruserid,
            name: customerusername,
            email: customeruseremail,
            password: customeruserpass,
            totalCarUnsold: customerusertotalcar,
            lastLoginTime: bugun,
          },
        })
        .then((response) => {
          localStorage.removeItem("gelencarid");
          navigate("/Home");
        })
        .catch((error) => {});
    } catch (error) {}
  };

  // Değişiklik Yapmak İstediğinde İlgili Label Üzerine Tıklayınca Açılan Input Construction'ları
  const [CarNameInputVisible, setCarNameInputVisible] = useState(false);
  const [CarPriceInputVisible, setCarPriceInputVisible] = useState(false);
  const [CarModelNameInputVisible, setCarModelNameInputVisible] = useState(false);
  const [CarModelYearsInputVisible, setCarModelYearsInputVisible] = useState(false);
  const [CarKmInputVisible, setCarKmInputVisible] = useState(false);
  const [CarFuelInputVisible, setCarFuelInputVisible] = useState(false);
  const [CarShiftInputVisible, setCarShiftInputVisible] = useState(false);
  const [CarEngineHpInputVisible, setCarEngineHpInputVisible] = useState(false);
  const [CarColorInputVisible, setCarColorInputVisible] = useState(false);
  const handleCarColorClick = () => {
    setCarColorInputVisible(true);
  }
  const handleCarEngineHpClick = () => {
    setCarEngineHpInputVisible(true);
  }
  const handleCarShiftClick = () => {
    setCarShiftInputVisible(true);
  }
  const handleCarFuelClick = () => {
    setCarFuelInputVisible(true);
  }
  const handleCarKmClick = () => {
    setCarKmInputVisible(true);
  }
  const handleCarModelYearsClick = () => {
    setCarModelYearsInputVisible(true);
  }
  const handleCarNameLabelClick = () => {
    setCarNameInputVisible(true);
  };
  const handleCarModelNameLabelClick = () => {
    setCarModelNameInputVisible(true);
  };
  const handleCarPriceLabelClick = () => {
    setCarPriceInputVisible(true);
  };

  // Home Sayfasına Yönlendirme
  const GeriDonButton = () => {
    localStorage.removeItem("gelencarid");
    navigate("/Home");
  };
  return (
    <div>
      <div className="GeriDonButtonBackUpdateCar">
        <button className="GeriDonUpdateCar" onClick={GeriDonButton}>
          Geri Dön
        </button>
      </div>
      <h3>Araç Güncelleme</h3>
      <div className="updateuser">
        <div className="tableClass">
          <table border={1} className="Table" align="center">
            <tr>
            <th>ARAÇ ID</th>
            <th>ARAÇ RESİM</th>
            <th>ARAÇ ADI</th>
            <th>ARAÇ MODEL</th>
            <th>MODEL YILI</th>
            <th>KM</th>
            <th>YAKIT TÜRÜ</th>
            <th>VİTES</th>
            <th>MOTOR GÜCÜ</th>
            <th>RENK</th>
            <th>FİYAT</th>
              <th>SON GÜNCELLEME TARİHİ</th>
            </tr>

            {cars && (
              <tr>
                <td>{cars.idMore}</td>

                <td>
                  <form id="form" encType="multipart/form-data">
                    <img
                      height={60}
                      width={60}
                      src={cars.img}
                      onClick={HandleImgUpload}
                    />

                    <input
                      type="file"
                      id="file"
                      ref={FileUploadRef}
                      onChange={UploadImgDisplay}
                      hidden
                    />
                  </form>
                </td>
                <td>
                  <label onClick={handleCarNameLabelClick}>
                    {cars.carName}
                  </label>
                  <br />
                  {CarNameInputVisible && (
                    <input
                      type="text"
                      placeholder="Araç Adı Girin."
                      value={CarName}
                      onChange={(e) => setCarName(e.target.value)}
                    />
                  )}
                </td>
                <td>
                  <label onClick={handleCarModelNameLabelClick}>
                    {cars.carModelName}
                  </label>
                  <br />
                  {CarModelNameInputVisible && (
                    <input
                      type="text"
                      placeholder="Araç Modelini Girin."
                      value={CarModelName}
                      onChange={(e) => setCarModelName(e.target.value)}
                    />
                  )}
                </td>

                <td>
                  <label onClick={handleCarModelYearsClick}>
                    {cars.modelYears} 
                  </label>
                  <br />
                  {CarModelYearsInputVisible && (
                    <input
                      type="text"
                      placeholder="Araç Model Yılını Girin."
                      value={CarModelYears}
                      onChange={(e) => setCarModelYears(e.target.value)}
                    />
                  )}
                </td>

                <td>
                  <label onClick={handleCarKmClick}>{cars.totalKm} </label>
                  <br />
                  {CarKmInputVisible && (
                    <input
                      type="text"
                      placeholder="Araç Km'sini Girin."
                      value={CarKm}
                      onChange={(e) => setCarKm(e.target.value)}
                    />
                  )}
                </td>

                <td>
                  <label onClick={handleCarFuelClick}>{cars.fuel} </label>
                  <br />
                  {CarFuelInputVisible && (
                    <input
                      type="text"
                      placeholder="Yakıt Türünü Girin."
                      value={CarFuel}
                      onChange={(e) => setCarFuel(e.target.value)}
                    />
                  )}
                </td>

                <td>
                  <label onClick={handleCarShiftClick}>{cars.shift} </label>
                  <br />
                  {CarShiftInputVisible && (
                    <input
                      type="text"
                      placeholder="Araç Vites Modelini Girin."
                      value={CarShift}
                      onChange={(e) => setCarShift(e.target.value)}
                    />
                  )}
                </td>

                <td>
                  <label onClick={handleCarEngineHpClick}>
                    {cars.engineHp} HP
                  </label>
                  <br />
                  {CarEngineHpInputVisible && (
                    <input
                      type="text"
                      placeholder="Motor Gücünü Girin."
                      value={CarEngineHp}
                      onChange={(e) => setCarEngineHp(e.target.value)}
                    />
                  )}
                </td>

                <td>
                  <label onClick={handleCarColorClick}>{cars.carColor}  </label>
                  <br />
                  {CarColorInputVisible && (
                    <input
                      type="text"
                      placeholder="Araç Rengini Girin."
                      value={CarColor}
                      onChange={(e) => setCarColor(e.target.value)}
                    />
                  )}
                </td>

                <td>
                  <label onClick={handleCarPriceLabelClick}>
                    {cars.price} ₺
                  </label>
                  <br />
                  {CarPriceInputVisible && (
                    <input
                      type="text"
                      placeholder="Araç Fiyatını Girin."
                      value={CarPrice}
                      onChange={(e) => setCarPrice(e.target.value)}
                    />
                  )}
                </td>
                <td>{cars.lastDateTime}</td>
              </tr>
            )}
          </table>
          <button type="submit" onClick={UpdateCarButon}>
            GÜNCELLE
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpdateCar;

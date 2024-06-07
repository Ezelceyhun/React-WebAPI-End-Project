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

  // Inputlardan Gelen Değerleri Al
  const [CarName, setCarName] = useState("");  
  const [CarPrice, setCarPrice] = useState("");
  const [CarModelName, setCarModelName] = useState("");
  
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

  // Araç Güncelleme Axios'u
  const UpdateCarButon = async () => {
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
  }
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
              <th>ID</th>
              <th>ARAÇ RESİM</th>
              <th>ARAÇ ADI</th>
              <th>ARAÇ MODELİ</th>
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

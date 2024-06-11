import React, { useRef, useState } from "react";
import "../css/CreateCar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateCar() {

  const bugun = new Date();
  const navigate = useNavigate();
  
  const [carname, setcarname] = useState("");
  const [carmodel, setcarmodel] = useState("");
  const [carfiyat, setcarfiyat] = useState("");
  const [carmodelyears, setcarmodelyears] = useState("");
  const [cartotalkm, setcartotalkm] = useState("");
  const [carfuel, setcarfuel] = useState("");
  const [carshift, setcarshift] = useState("");
  const [carenginehp, setcarenginehp] = useState("");
  const [carcolor, setcarcolor] = useState("");

  const [CarURL, setCarURL] = useState("");
  const FileUploadRef = useRef("");
  let CarImgUrl = "";

  // Resim Yükleme Aktif Değil
  const HandleImgUpload = (event) => {
    event.preventDefault();
    FileUploadRef.current.click();
  };

  // Resim Yükleme Aktif Değil
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
      if (imgresponse.status === 201) {
        const data = await imgresponse.json();
        setCarURL(data?.location);
        CarImgUrl = data?.location;
      }
    } catch (error) {}
  };

  // Yeni Araç Oluşturma
  const CreateCarButton = () => {
    console.log(carmodelyears,cartotalkm,carfuel,carshift,carenginehp,carcolor);
    if (CarURL === "") {
      CarImgUrl = "no-photos.png";
    } else {
      CarImgUrl = CarURL;
    }
    try {
      let a = axios
        .post("http://localhost:61334/CreateCar", {
          carName: carname,
          price: carfiyat,
          lastDateTime: bugun,
          sold: 1,
          carModelName: carmodel,
          img: CarImgUrl,
          ownerUserId: 10,
          userBuy: 10,
          modelYears: carmodelyears,
          totalKm: cartotalkm,
          fuel: carfuel,
          shift: carshift,
          engineHp: carenginehp,
          carColor: carcolor,
        })
        .then((response) => {
          alert("Başarılı");
        })
        .catch((error) => {
          alert("Başarısız Axios Hatası");
        });
    } catch (error) {
      alert("Başarısız try hatası");
    }
    navigate("/Home");
  };

  // Home Sayfasına Yönlendirme
  const GeriDonButton = () => {
    navigate("/Home");
  }

  return (
    <div>
      <div className="GeriDonButtonBackGroundCreateCar">
        <button className="GeriDonButtonCreateCar" onClick={GeriDonButton}>
          Geri Dön
        </button>
      </div>
      <div className="createcar">
        <form>
          <div className="kutuCarCreate">
            <label>Araç Adı</label>
            <br/>
            <input
              type="text"
              value={carname}
              onChange={(e) => setcarname(e.target.value)}
            />
          </div>
          <div className="kutuCarCreate">
            <label>Araç Modeli</label>
            <br/>
            <input
              type="text"
              value={carmodel}
              onChange={(e) => setcarmodel(e.target.value)}
            />
          </div>
          <div className="kutuCarCreate">
            <label>Fiyat</label>
            <br/>
            <input
              type="text"
              value={carfiyat}
              onChange={(e) => setcarfiyat(e.target.value)}
            />
          </div>

          <div className="kutuCarCreate">
            <label>Model Yılı</label>
            <br/>
            <input
              type="text"
              value={carmodelyears}
              onChange={(e) => setcarmodelyears(e.target.value)}
            />
          </div>
          <div className="kutuCarCreate">
            <label>Toplam Km</label>
            <br/>
            <input
              type="text"
              value={cartotalkm}
              onChange={(e) => setcartotalkm(e.target.value)}
            />
          </div>
          <div className="kutuCarCreate">
            <label>Yakıt Türü</label>
            <br/>
            <input
              type="text"
              value={carfuel}
              onChange={(e) => setcarfuel(e.target.value)}
            />
          </div>
          <div className="kutuCarCreate">
            <label>Vites</label>
            <br/>
            <input
              type="text"
              value={carshift}
              onChange={(e) => setcarshift(e.target.value)}
            />
          </div>
          <div className="kutuCarCreate">
            <label>Motor Gücü</label>
            <br/>
            <input
              type="text"
              value={carenginehp}
              onChange={(e) => setcarenginehp(e.target.value)}
            />
          </div>
          <div className="kutuCarCreate">
            <label>Araç Rengi</label>
            <br/>
            <input
              type="text"
              value={carcolor}
              onChange={(e) => setcarcolor(e.target.value)}
            />
          </div>
          <div className="kutuCarCreateLabel">
            <label className="uyariLabel">Araç Resmini Güncelle Sayfasından Ekleyiniz!</label>
            {/* <form encType="multipart/form-data">
              <button disabled type="submit" onClick={HandleImgUpload}>
                Resim Seç
              </button>
              <input
                type="file"
                id="file"
                ref={FileUploadRef}
                onChange={UploadImgDisplay}
                hidden
              />
            </form> */}
          </div>
          <div className="kutuCarCreateButton">
            <button type="submit" onClick={CreateCarButton}>
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateCar;

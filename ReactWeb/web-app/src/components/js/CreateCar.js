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
          <div className="kutuCarCreate">
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

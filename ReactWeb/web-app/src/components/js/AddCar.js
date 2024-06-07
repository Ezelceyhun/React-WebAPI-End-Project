import "../css/AddCar.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddCar = () => {
  const bugun = new Date();
  const navigate = useNavigate();
  const location = useLocation();
  const locationcar = useLocation();

  const {
    gelenCarUserId,
    gelenCarUserName,
    gelenCarUserMail,
    gelenCarUserPass,
    gelenCarUserTotal,
  } = locationcar.state || {};
  const [isLoading, setIsLoading] = useState(true);

  const [Ver, setveri] = useState([]);

  // Satışta Olan Araçları Listeleme Axios'u
  useEffect(() => {
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

  // İlgili Aracı Al Buton - Axios
  const BuyCarButton = async (
    secilicarid,
    secilicarname,
    secilicarmodel,
    secilicarimg,
    seciliprice,
    seciliuserid,
    seciliusername,
    seciliusermail,
    seciliuserpass,
    seciliusercartotal
  ) => {
    //e.preventDefault();
    let aracid = secilicarid;
    let aracad = secilicarname;
    let aracfiyat = seciliprice;
    let aracsold = 0;
    let aracmodel = secilicarmodel;
    let carpicture = secilicarimg;
    let ownerid = seciliuserid;
    let cname = seciliusername;
    let cemail = seciliusermail;
    let cpass = seciliuserpass;
    let ctotalcar = seciliusercartotal + 1;
    let selluserid = gelenCarUserId;

    try {
      axios
        .put("http://localhost:61334/SelectCar/" + aracid, {
          idMore: aracid,
          carName: aracad,
          price: aracfiyat,
          lastDateTime: bugun,
          sold: aracsold,
          carModelName: aracmodel,
          ownerUserId: ownerid,
          img: carpicture,
          userBuy: selluserid,
          customerUser: {
            id: ownerid,
            name: cname,
            email: cemail,
            password: cpass,
            totalCarUnsold: ctotalcar,
            lastLoginTime: bugun,
          },
        })
        .then((response) => {
          navigate("/Home");
        })
        .catch((error) => {});
    } catch (error) {}
  };

  // Home Sayfasına Yönlendirme
  const GeriDonButton = () => {
    navigate("/Home");
  }

  return (
    <div>
      <div className="GeriDonAddCar">
        <button className="GeriDonButtonAddCar" onClick={GeriDonButton}>Geri Dön</button>
      </div>
      <table border={1} className="Table" align="center">
        <tr>
          <th>ARAÇ ID</th>
          <th>ARAÇ RESİM</th>
          <th>ARAÇ AD</th>
          <th>ARAÇ MODEL</th>
          <th>ARAÇ FİYAT</th>
          <th>ARAÇ SON GÜNCELLENME TARİHİ</th>
          <th>SATIN AL</th>
        </tr>

        {Ver.map((cars) => (
          <tr>
            <td>{cars.idMore}</td>
            <td>
              <img src={cars.img} height={90} width={90} />
            </td>
            <td>{cars.carName}</td>
            <td>{cars.carModelName}</td>
            <td>{cars.price}</td>
            <td>{cars.lastDateTime}</td>

            <td>
              <button
                className="albuton"
                type="submit"
                onClick={(e) =>
                  BuyCarButton(
                    cars.idMore,
                    cars.carName,
                    cars.carModelName,
                    cars.img,
                    cars.price,
                    cars.customerUser.id,
                    cars.customerUser.name,
                    cars.customerUser.email,
                    cars.customerUser.password,
                    cars.customerUser.totalCarUnsold
                  )
                }
              >
                Al
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default AddCar;

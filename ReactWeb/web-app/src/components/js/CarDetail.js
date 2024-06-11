import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/CarDetail.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// import { paste } from "@testing-library/user-event/dist/paste";

const CarDetail = () => {
  const bugun = new Date();
  const navigate = useNavigate();

  let carid = "";
  carid = localStorage.getItem("gelencar");
  // console.log(carid);

  const [cars, setCar] = useState("");

  let tokens;
  let a = localStorage.getItem("gelencar");
  //console.log(a);

  const [isLoading, setIsLoading] = useState(true);
  let userTokenId;
  tokens = localStorage.getItem("token");
  let login = localStorage.getItem("login");
  console.log(login);

  useEffect(() => {
    tokens = localStorage.getItem("token");

    if (tokens === undefined || tokens === null || tokens === "") {
    } else {
      let userToken = jwtDecode(tokens);
      userTokenId = userToken.UserId;
      console.log(userTokenId);
    }

    const fetchData = async () => {
      try {
        axios
          .get("http://localhost:61334/Cars/" + a)
          .then((res) => {
            setCar(res.data[0]);
            // console.log(res.data[0]);
          })
          .catch((error) => {
            // console.log(error);
          });
      } catch (error) {
        //console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (isLoading) {
      fetchData();
    }
  }, [isLoading]);

  const SatinAlButton = async (
    secilicarid,
    secilicarname,
    secilicarmodel,
    secilicarimg,
    seciliprice,
    seciliuserid,
    seciliusername,
    seciliusermail,
    seciliuserpass,
    seciliusercartotal,
    selectedFuel,
    selectedShift,
    selectedTotalKm,
    selectedCarColor,
    selectedEngineHp,
    selectedModelYears
  ) => {
    let total = seciliusercartotal + 1;
    try {
      if (cars.sold === 0) {
        alert("Araç Satışta Değil");
      }
      if (tokens === null || tokens === undefined || tokens === "") {
        navigate("/Login");
      } else {
        axios
          .put("http://localhost:61334/SelectCar/" + secilicarid, {
            idMore: secilicarid,
            carName: secilicarname,
            price: seciliprice,
            lastDateTime: bugun,
            sold: 0,
            carModelName: secilicarmodel,
            ownerUserId: seciliuserid,
            img: secilicarimg,
            userBuy: seciliuserid,
            modelYears: selectedModelYears,
            totalKm: selectedTotalKm,
            fuel: selectedFuel,
            shift: selectedShift,
            engineHp: selectedEngineHp,
            carColor: selectedCarColor,
            customerUser: {
              id: seciliuserid,
              name: seciliusername,
              email: seciliusermail,
              password: seciliuserpass,
              totalCarUnsold: total,
              lastLoginTime: bugun,
            },
          })
          .then((respons) => {
            console.log("respons oldu");
            navigate("/Home");
          })
          .catch((error) => {});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GeriDonButton = () => {
    if (login === "1") {
      localStorage.removeItem("login");
      navigate("/Login");
    } else {
      localStorage.removeItem("userid");
      localStorage.removeItem("login");
      navigate("/Home");
    }
  };

  const SatisIptali = async () => {
    let totalcar = cars.customerUser.totalCarUnsold + 1;
    axios
      .put("http://localhost:61334/UpdateCar/" + cars.idMore, {
        idMore: cars.idMore,
        carName: cars.carName,
        price: cars.price,
        lastDateTime: bugun,
        sold: 0,
        carModelName: cars.carModelName,
        ownerUserId: cars.ownerUserId,
        img: cars.img,
        userBuy: cars.ownerUserId,
        modelYears: cars.modelYears,
        totalKm: cars.totalKm,
        fuel: cars.fuel,
        shift: cars.shift,
        engineHp: cars.engineHp,
        carColor: cars.carColor,
        customerUser: {
          id: cars.customerUser.id,
          name: cars.customerUser.name,
          email: cars.customerUser.email,
          password: cars.customerUser.password,
          totalCarUnsold: totalcar,
          lastLoginTime: bugun,
        },
      })
      .then((carresponse) => {
        navigate("/Home");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div className="GeriDonCarDetail">
        <button className="GeriDonButtonCarDetail" onClick={GeriDonButton}>
          Geri Dön
        </button>
      </div>
      <div className="CarDetail">
        <div className="CarImg">
          <img src={cars.img} />
        </div>
        <div className="CarName">
          <div>
            {tokens === "" || tokens === undefined || tokens === null ? (
              <p></p>
            ) : (
              <button onClick={SatisIptali}>Satışı İptal Et</button>
            )}
          </div>
          <p>
            {cars.carName + " " + cars.carModelName + " " + cars.modelYears}{" "}
            Model <br />
          </p>
        </div>
        <div className="CarPrice">
          <p>
            KM: {cars.totalKm}
            <br />
            Yakıt Türü: {cars.fuel}
            <br />
            Vites: {cars.shift}
            <br />
            Motor Gücü: {cars.engineHp}
            <br />
            Renk: {cars.carColor}
            <br />
            Fiyat: {cars.price} ₺
          </p>
          {tokens === "" || tokens === undefined || tokens === null ? (
            <p></p>
          ) : (
            <button
              onClick={(e) =>
                SatinAlButton(
                  cars.idMore,
                  cars.carName,
                  cars.carModelName,
                  cars.img,
                  cars.price,
                  cars.customerUser.id,
                  cars.customerUser.name,
                  cars.customerUser.email,
                  cars.customerUser.password,
                  cars.customerUser.totalCarUnsold,
                  cars.fuel,
                  cars.shift,
                  cars.totalKm,
                  cars.carColor,
                  cars.engineHp,
                  cars.modelYears
                )
              }
            >
              Satın Al
            </button>
          )}
        </div>
        <p className="floatStop"></p>
        <div className="UpdateDate">
          <p>{cars.lastDateTime}</p>
        </div>
      </div>
    </div>
  );
};
export default CarDetail;

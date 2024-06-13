import { useEffect, useState } from "react";
import "../css/Sales.css";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";

const Sales = () => {
  const anlik = new Date();
  const bugun = new Date();

  const navigate = useNavigate();

  let userid = localStorage.getItem("userid");

  const [Vercar, setvericar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Satışta Olan Araca Talip Olan User ve Car Bilgileri
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get(
            "http://localhost:61334/SellCar/" + userid + "?UserBuy=" + userid
          )
          .then((res) => {
            setvericar(res.data);
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

  const [onaycar, setonaycar] = useState([]);
  const [onaycarid, setonaycarid] = useState();
  const [onaycarname, setonaycarname] = useState();
  const [onaycarmail, setonaycarmail] = useState();
  const [onaycarpass, setonaycarpass] = useState();
  const [onaycartotalCarUnsold, setonaycartotalCarUnsold] = useState();

  //Onayla Buton Başlangıcı
  const OnaylaButtonClick = async (
    userby,
    idMore,
    picture,
    carName,
    carModelName,
    price,
    modelyears,
    totalkm,
    fuel,
    shift,
    enginehp,
    carcolor
  ) => {
    try {
      axios
        .get("http://localhost:61334/User/" + userby)
        .then((onayresponse) => {
          setonaycarname(onayresponse.data.name);
          setonaycarmail(onayresponse.data.email);
          setonaycarpass(onayresponse.data.password);
          setonaycarid(onayresponse.data.id);
          setonaycartotalCarUnsold(onayresponse.data.totalCarUnsold + 1);
        });

      axios
        .put("http://localhost:61334/UpdateCar/" + idMore, {
          idMore: idMore,
          carName: carName,
          price: price,
          lastDateTime: bugun,
          sold: 0,
          carModelName: carModelName,
          ownerUserId: onaycarid,
          img: picture,
          userBuy: onaycarid,
          modelYears: modelyears,
          totalKm: totalkm,
          fuel: fuel,
          shift: shift,
          engineHp: enginehp,
          carColor: carcolor,
          customerUser: {
            id: onaycarid,
            name: onaycarname,
            email: onaycarmail,
            password: onaycarpass,
            totalCarUnsold: onaycartotalCarUnsold,
            lastLoginTime: bugun,
          },
        })
        .then((carresponse) => {
          historySell(idMore,
            picture,
            carName,
            carModelName,
            price,
            modelyears,
            totalkm,
            fuel,
            shift,
            enginehp,
            carcolor);
        })
        .catch((error) => {});
    } catch (error) {}
  };
  const historySell = async (
    idMore,
    picture,
    carName,
    carModelName,
    price,
    modelyears,
    totalkm,
    fuel,
    shift,
    enginehp,
    carcolor
  ) => {
    console.log(modelyears, totalkm, fuel, shift, enginehp, carcolor);
    try {
      axios
        .post("http://localhost:61334/CreateSoldSales", {
          userSellingId: userid,
          carId: idMore,
          img: picture,
          carName: carName,
          carModelName: carModelName,
          carPrice: price,
          userId: onaycarid,
          userName: onaycarname,
          userEmail: onaycarmail,
          dateTimeHistory: anlik,
          modelYears: modelyears,
          totalKm: totalkm,
          fuel: fuel,
          shift: shift,
          engineHp: enginehp,
          carColor: carcolor,
        })
        .then((historyResp) => {})
        .catch((error) => {});
      localStorage.removeItem("userid");
      navigate("/Home");
    } catch (error) {}
  };

  //Reddet Buton Başlangıcı
  const ReddetButtonClick = async (
    ownerUserId,
    idMore,
    picture,
    carName,
    carModelName,
    price,
    modelyears,
    totalkm,
    fuel,
    shift,
    enginehp,
    carcolor
  ) => {
    try {
      axios
        .get("http://localhost:61334/User/" + ownerUserId)
        .then((onayresponse) => {
          setonaycarname(onayresponse.data.name);
          setonaycarmail(onayresponse.data.email);
          setonaycarpass(onayresponse.data.password);
          setonaycarid(onayresponse.data.id);
          setonaycartotalCarUnsold(onayresponse.data.totalCarUnsold + 1);
        });

      axios
        .put("http://localhost:61334/UpdateCar/" + idMore, {
          idMore: idMore,
          carName: carName,
          price: price,
          lastDateTime: bugun,
          sold: 0,
          carModelName: carModelName,
          ownerUserId: onaycarid,
          img: picture,
          userBuy: onaycarid,
          modelYears: modelyears,
          totalKm: totalkm,
          fuel: fuel,
          shift: shift,
          engineHp: enginehp,
          carColor: carcolor,
          customerUser: {
            id: onaycarid,
            name: onaycarname,
            email: onaycarmail,
            password: onaycarpass,
            totalCarUnsold: onaycartotalCarUnsold,
            lastLoginTime: bugun,
          },
        })
        .then((carresponse) => {
          historySell(
            idMore,
            picture,
            carName,
            carModelName,
            price,
            modelyears,
            totalkm,
            fuel,
            shift,
            enginehp,
            carcolor
          );
        })
        .catch((error) => {});
    } catch (error) {}
  };

  // Home Sayfasına Yönlendirme
  const GeriDonButton = () => {
    localStorage.removeItem("userid");
    navigate("/Home");
  };
  return (
    <div>
      <div className="GeriDonButtonBackGround">
        <button className="GeriDonButton" onClick={GeriDonButton}>
          Geri Dön
        </button>
      </div>
      <table border={1} className="Table" align="center">
        <tr>
          <th>ID</th>
          <th>ARAÇ RESİM</th>
          <th>ARAÇ AD</th>
          <th>ARAÇ MODEL</th>
          <th>ARAÇ FİYAT</th>
          <th>ARAÇ SON GÜNCELLENME TARİHİ</th>
          <th>ALACAKLI ID</th>
          <th>ONAY</th>
        </tr>

        {Vercar.map((sellcar) => (
          <tr>
            <td>{sellcar.idMore}</td>
            <td>
              <img src={sellcar.img} height={80} width={80} />
            </td>
            <td>{sellcar.carName}</td>
            <td>{sellcar.carModelName}</td>
            <td>{sellcar.price} ₺</td>
            <td>{sellcar.lastDateTime}</td>
            <td>{sellcar.userBuy}</td>
            <td>
              <button
                onClick={(e) =>
                  OnaylaButtonClick(
                    sellcar.userBuy,
                    sellcar.idMore,
                    sellcar.img,
                    sellcar.carName,
                    sellcar.carModelName,
                    sellcar.price,
                    sellcar.modelYears,
                    sellcar.totalKm,
                    sellcar.fuel,
                    sellcar.shift,
                    sellcar.engineHp,
                    sellcar.carColor
                  )
                }
              >
                Onayla
              </button>
              <br />
              <button
                onClick={(e) =>
                  ReddetButtonClick(
                    sellcar.ownerUserId,
                    sellcar.idMore,
                    sellcar.img,
                    sellcar.carName,
                    sellcar.carModelName,
                    sellcar.price,
                    sellcar.modelYears,
                    sellcar.totalKm,
                    sellcar.fuel,
                    sellcar.shift,
                    sellcar.engineHp,
                    sellcar.carColor
                  )
                }
              >
                Reddet
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Sales;

import axios from "axios";
import { useEffect, useState } from "react";
import "../css/OldSales.css";
import { useNavigate } from "react-router-dom";

const OldSales = () => {
  const navigate = useNavigate();
  
  let localid = localStorage.getItem("userid");

  const [SellCars, setSellCars] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  // Sayfa Yüklenince Geçmiş Satışları Listeleme
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get("http://localhost:61334/Sell/" + localid).then((response) => {
          setSellCars(response.data);
        });
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    if (IsLoading) {
      fetchData();
    }
  });

  // Home Sayfasına Yönlendirme
  const GeriDonButton =() => {
    localStorage.removeItem("userid");
    navigate("/Home");
  }
  return (
    <div>
      <div className="GeriDonButtonBackGround">
        <button className="GeriDonButton" onClick={GeriDonButton}>Geri Dön</button>
      </div>
      <div className="tableClass">
        <table border={1} className="Table" align="center">
          <tr>
            <th>ID</th>
            <th>IMG</th>
            <th>ARAÇ ADI</th>
            <th>ARAÇ MODEL</th>
            <th>MODEL YILI</th>
            <th>TOPLAM KM</th>
            <th>YAKIT TÜRÜ</th>
            <th>VİTES</th>
            <th>MOTOR GÜCÜ</th>
            <th>ARAÇ RENGİ</th>
            <th>ARAÇ FİYAT</th>
            <th>ALAN KİŞİ ID</th>
            <th>ALAN KİŞİ ADI</th>
            <th>ALAN KİŞİ E-POSTA</th>
            <th>TARİH</th>
          </tr>

          {SellCars.map((cars) => (
            <tr>
              <td key={cars.soldId}>{cars.soldId}</td>
              <td>
                <img src={cars.img} height={80} width={80} />
              </td>
              <td>{cars.carName}</td>
              <td>{cars.carModelName}</td>
              <td>{cars.modelYears}</td>
              <td>{cars.totalKm}</td>
              <td>{cars.fuel}</td>
              <td>{cars.shift}</td>
              <td>{cars.engineHp}</td>
              <td>{cars.carColor}</td>
              <td>{cars.carPrice}</td>
              <td>{cars.userId}</td>
              <td>{cars.userName}</td>
              <td>{cars.userEmail}</td>
              <td>{cars.dateTimeHistory}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default OldSales;

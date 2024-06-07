import React, { useState } from "react";
import "../css/CreateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const bugun = new Date();
  
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");  

  // Yeni User Oluşturma Construction - Axios
  const CreateUserButton = async () => {
    try {
      axios
        .post("http://localhost:61334/CreateUser", {
          //inputlardan gelen veriler
          name: name,
          email: email,
          password: password,
          totalCarUnsold: 0,
          lastLoginTime: bugun,
        })
        .then((response) => {})
        .catch((error) => {});
      navigate("/Login");
    } catch (error) {}
  };

  return (
    <div>
      <h3>Kullanıcı Ekleme</h3>
      <div className="createuser">
        <form>
          <div className="kutuUser">
            <label>Adınızı Girin</label>
            <br/>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="kutuUser">
            <label>E-Posta Girin</label>
            <br/>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="kutuUser">
            <label>Şifre Girin</label>
            <br/>
            <input
              type="password"
              value={password}
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          <div className="kutuUser">
            <button type="submit" onClick={CreateUserButton}>
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateUser;

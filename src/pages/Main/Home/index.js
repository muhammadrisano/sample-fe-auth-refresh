
import React, { useEffect, useState } from "react";
import api from "../../../services/api";

const Home = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    api.get("/members")
    .then((res)=>{
        setMembers(res.data.data)
    })
  },[]);
  return (
    <div>
        <h1>halaman Member</h1>
      <ul>
        {members.map((item) => (
          <li>
            {item.name} ({item.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

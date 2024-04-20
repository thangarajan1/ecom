import React from 'react'
import img from "./home.png"
import { useContext,useEffect } from 'react';
import { cartContext } from './App';
import axios from "axios";


export default function Home() {
 
  const { users, setUsers} = useContext(cartContext);
  const getAllUsers = async () => {
    await axios.get("http://localhost:8000/items").then((res) => {
      setUsers(res.data);
    });
  };
    

  const handleSearch = (e) => {
    const img = document.getElementById("img")
    const input = document.getElementById("input");
    const hide = document.getElementById("hide");


   if(input.value !== ""){
     img.style.display="none";
    hide.style.display = "block";
     
   }else{
    img.style.display = "block";
    hide.style.display = "none";

   }
    const serchText = e.target.value.toLowerCase();
    const filterText = users.filter((user) => {
      return user.name.toLowerCase().includes(serchText);
    });
    console.log(filterText);
    setUsers(filterText);
  };

   
   useEffect(() => {
    getAllUsers();
   });

  return (
    <>
      <div className="search">
        <input
          type="search"
          name=""
          id="input"
          placeholder="Find Your Items"
          onChange={handleSearch}
        />
      </div>
      <img src={img} alt="" width={"100%"} height={"500"} id="img" />
      <div className="container" id='hide' style={{display:"none"}}>
        <div className="row">
          {users.map((item) => {
            const name =
              item.name.length > 20
                ? item.name.substring(0, 20) + ".."
                : item.name;

            // const addCard = () => {
            //   setCardItem([...cardItem, item]);
            // };

            // const removeCard = () => {
            //   setCardItem(cardItem.filter((c) => c.id !== item.id));
            // };

            return (
              <div className="col-md-4" key={item.id} style={{ marginTop: 20 }}>
                <div className="card text-center">
                  <div className="card-body">
                    <img
                      src={item.img}
                      alt=""
                      className="card-img"
                      width={"250"}
                      height={"250"}
                    />
                    <h3 className="card-tittle">{name}</h3>
                    <p className="card-text">{item.weight}</p>
                    <p className="card-text">{item.length}</p>

                    <p className="card-text">
                      <strike className="text-muted"> Rs. {item.dis}</strike>
                      Rs.{item.amt}
                    </p>
                    {/* {item.id !== cardItem.id ? (
                      <button
                        className="btn btn-danger w-100"
                        onClick={removeCard}
                      >
                        Remove to Card
                      </button>
                    ) : (
                      <button className="btn btn-info w-100" onClick={addCard}>
                        Add to Card
                      </button>
                    )} */}
                  </div>
                </div>
              </div>
            );
          })} 
        </div>
      </div>
    </>
  );
}

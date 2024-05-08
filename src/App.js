import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Birds from "./Birds.jsx";
import Animals from "./Animals.jsx";
import Fishs from "./Fishs.jsx";
import Foods from "./Foods.jsx";
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Card from "./Card.jsx";
import { useState, createContext, useEffect } from "react";
import CardStore from "./CardStore.jsx";
import axios from "axios";
import DeleteItems from "./DeleteItems.jsx";
// import HomeLog from "./HomeLog";

export const cartContext = createContext();

function App() {
  const [cardItem, setCardItem] = useState([]); //Card Data
  const [users, setUsers] = useState([]); // All Data
  const [bird, setBird] = useState([]); //Birds
  const [animal, setAnimal] = useState([]); //Animal
  const [fish, setFish] = useState([]); //Fish
  const [food, setFood] = useState([]); //Food
  const [checkReg, setCheckReg] = useState(true);

  const [userData, setUserData] = useState({
    //Bird Data Uplod
    img: "",
    name: "",
    weight: "",
    length: "",
    amt: "",
    dis: "",
  });

  const [userDataAnimal, setUserDataAnimal] = useState({
    //Animal Data Upload
    img: "",
    name: "",
    amt: "",
    dis: "",
  });

  const [userDataFish, setUserDataFish] = useState({
    // Fish Data Upload
    img: "",
    name: "",
    amt: "",
    dis: "",
  });
  const [userDataFood, setUserDataFood] = useState({
    // food Data Upload
    img: "",
    name: "",
    amt: "",
    dis: "",
  });
  // All Data
  const getAllUsers = async () => {
    await axios.get("http://localhost:8000/items").then((res) => {
      setUsers(res.data);
    });
  };

  //Birds

  const getBirds = async () => {
    await axios.get("http://localhost:8000/bird").then((res) => {
      setBird(res.data);
    });
  };

  //Animal

  const getAnimal = async () => {
    await axios.get("http://localhost:8000/animal").then((res) => {
      setAnimal(res.data);
    });
  };

  //Fish

  const getFish = async () => {
    await axios.get("http://localhost:8000/fish").then((res) => {
      setFish(res.data);
    });
  };

  //Food

  const getFood = async () => {
    await axios.get("http://localhost:8000/food").then((res) => {
      setFood(res.data);
    });
  };

  useEffect(() => {
    getAllUsers();
    getBirds();
    getAnimal();
    getFish();
    getFood();
  }, []);

  return (
    <cartContext.Provider
      value={{
        checkReg,
        setCheckReg,
        cardItem,
        setCardItem,
        users,
        setUsers,
        bird,
        setBird,
        animal,
        setAnimal,
        fish,
        setFish,
        food,
        setFood,
        userData,
        setUserData,
        userDataAnimal,
        setUserDataAnimal,
        userDataFish,
        setUserDataFish,
        userDataFood,
        setUserDataFood,
      }}
    >
      {checkReg ? (
        <BrowserRouter>
          {/* <Register /> */}

          <Routes>
            <Route path="/" element={<Register />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bird" element={<Birds />} />
            <Route path="/animal" element={<Animals />} />
            <Route path="/fish" element={<Fishs />} />
            <Route path="/food" element={<Foods />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="" element={""} />
            <Route path="/card" element={<Card />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/update" element={<CardStore />} />
            <Route path="/delete" element={<DeleteItems />} />
          </Routes>
        </BrowserRouter>
      )}
    </cartContext.Provider>
  );
}

export default App;

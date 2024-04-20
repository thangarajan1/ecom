import axios from "axios";
import { cartContext } from "./App";
import { useContext} from "react";



export default function CardStore() {
  const {
    userData,
    setUserData,
    userDataAnimal,
    setUserDataAnimal,
    userDataFish,
    setUserDataFish,
    userDataFood,
    setUserDataFood,
  } = useContext(cartContext);

const handleselect = (e)=>{
  const bird = document.getElementById("bird");
  const animal = document.getElementById("animal");
  const fish = document.getElementById("fish");
  const food = document.getElementById("food");
const select = e.target.value;

console.log(select);
  switch (true) {
    case select === "birds":
      bird.style.display = "block";
      animal.style.display = "none"
      fish.style.display = "none";
      food.style.display = "none";
      break;
    case select === "animals":
      bird.style.display = "none";
      animal.style.display = "block";
      fish.style.display = "none";
      food.style.display = "none";
      break;
    case select === "fish":
      bird.style.display = "none";
      animal.style.display = "none";
      fish.style.display = "block";
      food.style.display = "none";
      break;
    case select === "food":
      bird.style.display = "none";
      animal.style.display = "none";
      fish.style.display = "none";
      food.style.display = "block";
      break;
    default:
      console.log("no")
      break;
  }
}

  const handleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/bird", userData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Animals

  const handleDataAnimal = (e) => {
    setUserDataAnimal({ ...userDataAnimal, [e.target.name]: e.target.value });
  };

  const handleSubmitAnimal = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/animal", userDataAnimal)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Fish

  const handleDataFish = (e) => {
    setUserDataFish({ ...userDataFish, [e.target.name]: e.target.value });
  };

  const handleSubmitFish = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/fish", userDataFish)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // Foods

  const handleDataFood = (e) => {
    setUserDataFood({ ...userDataFood, [e.target.name]: e.target.value });
  };

  const handleSubmitFood = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/food", userDataFood)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      
  };


  return (
    <>
      <h1 className="text-center">Add New Products...</h1>
      <div className="container">
        <form action="">
          <div className="form-group">
            <select
              className="form-control"
              name="selector"
              id="selector"
              style={{ fontSize: "25px" }}
              onChange={handleselect}
            >
              <option value="birds">Birds</option>
              <option value="animals">Animals</option>
              <option value="fish">Fish</option>
              <option value="food">Food</option>
            </select>
          </div>
        </form>

        <div className="row d-flex justify-content-center align-items-center">
          {/* Birds */}

          <div className="col-md-4 " id="bird">
            <div className="card ">
              <div className="card-body">
                <h3 className="text-center">Birds</h3>
                <form action="">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Img File :
                      <input
                        type="text"
                        className="form-control"
                        value={userData.img}
                        onChange={handleData}
                        name="img"
                        id="img1"
                      />
                    </label>
                    <label htmlFor="name" className="form-label">
                      Name :
                      <input
                        type="text"
                        className="form-control"
                        value={userData.name}
                        onChange={handleData}
                        name="name"
                      />
                    </label>
                    <label htmlFor="weight" className="form-label">
                      Weight :
                      <input
                        type="text"
                        className="form-control"
                        value={userData.weight}
                        onChange={handleData}
                        name="weight"
                      />
                    </label>
                    <label htmlFor="length" className="form-label">
                      Length :
                      <input
                        type="text"
                        className="form-control"
                        value={userData.length}
                        onChange={handleData}
                        name="length"
                      />
                    </label>
                    <label htmlFor="amt" className="form-label">
                      Amount :
                      <input
                        type="text"
                        className="form-control"
                        value={userData.amt}
                        onChange={handleData}
                        name="amt"
                      />
                    </label>
                    <label htmlFor="dis" className="form-label">
                      Discount :
                      <input
                        type="text"
                        className="form-control"
                        value={userData.dis}
                        onChange={handleData}
                        name="dis"
                      />
                    </label>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Animals */}

          <div className="col-md-4" id="animal" style={{ display: "none" }}>
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Animals</h3>
                <form action="">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Img File :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataAnimal.img}
                        onChange={handleDataAnimal}
                        name="img"
                        id="img1"
                      />
                    </label>
                    <label htmlFor="name" className="form-label">
                      Name :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataAnimal.name}
                        onChange={handleDataAnimal}
                        name="name"
                      />
                    </label>
                    <label htmlFor="amt" className="form-label">
                      Amount :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataAnimal.amt}
                        onChange={handleDataAnimal}
                        name="amt"
                      />
                    </label>
                    <label htmlFor="dis" className="form-label">
                      Discount :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataAnimal.dis}
                        onChange={handleDataAnimal}
                        name="dis"
                      />
                    </label>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmitAnimal}
                    >
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Fish */}

          <div className="col-md-4" id="fish" style={{ display: "none" }}>
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Fish</h3>
                <form action="">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Img File :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataFish.img}
                        onChange={handleDataFish}
                        name="img"
                        id="img1"
                      />
                    </label>
                    <label htmlFor="name" className="form-label">
                      Name :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataFish.name}
                        onChange={handleDataFish}
                        name="name"
                      />
                    </label>
                    <label htmlFor="amt" className="form-label">
                      Amount :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataFish.amt}
                        onChange={handleDataFish}
                        name="amt"
                      />
                    </label>
                    <label htmlFor="dis" className="form-label">
                      Discount :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataFish.dis}
                        onChange={handleDataFish}
                        name="dis"
                      />
                    </label>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmitFish}
                    >
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Foods */}

          <div className="col-md-4" id="food" style={{ display: "none" }}>
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Foods</h3>
                <form action="">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Img File :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataFood.img}
                        onChange={handleDataFood}
                        name="img"
                        id="img1"
                      />
                    </label>
                    <label htmlFor="name" className="form-label">
                      Name :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataFood.name}
                        onChange={handleDataFood}
                        name="name"
                      />
                    </label>
                    <label htmlFor="amt" className="form-label">
                      Amount :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataFood.amt}
                        onChange={handleDataFood}
                        name="amt"
                      />
                    </label>
                    <label htmlFor="dis" className="form-label">
                      Discount :
                      <input
                        type="text"
                        className="form-control"
                        value={userDataFood.dis}
                        onChange={handleDataFood}
                        name="dis"
                      />
                    </label>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmitFood}
                    >
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

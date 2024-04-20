import React, { useContext } from 'react'
import { cartContext } from './App';
import axios from 'axios';



export default function DeleteItems() {

const { bird, setBird, animal, setAnimal, fish, setFish, food, setFood } =
  useContext(cartContext);


const handleDelete = async (e)=>{
  const handleConfirm = window.confirm("Are You Sure removed Yuor Item ?")
 if(handleConfirm){
await axios.delete(`http://localhost:8000/bird/${e}`).then((res) => {
  console.log(res.data);
  setBird(res.data);
});
 }
  if (handleConfirm) {
    await axios.delete(`http://localhost:8000/animal/${e}`).then((res) => {
      console.log(res.data);
      setAnimal(res.data);
    });
  }

    if (handleConfirm) {
      await axios.delete(`http://localhost:8000/fish/${e}`).then((res) => {
        console.log(res.data);
        setFish(res.data);
      });
    }

      if (handleConfirm) {
        await axios.delete(`http://localhost:8000/food/${e}`).then((res) => {
          console.log(res.data);
          setFood(res.data);
        });
      }
}

    return (
      <>
        <div className="container">
          {bird.map((item) => {
            return (
              <div
                className="row d-flex justify-content-center"
                style={{}}
                key={item.id}
              >
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body d-flex justify-content-around text-center">
                      <img
                        src={item.img}
                        alt=""
                        width={100}
                        height={100}
                        className=""
                      />
                      <div>
                        <h3 className="card-tille">Name</h3>
                        <p className="card-text">{item.name}</p>
                      </div>
                      <div>
                        <h3 className="card-tille">Amount</h3>
                        <p className="card-text">{item.amt}</p>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Animals */}

          {animal.map((item) => {
            return (
              <div
                className="row d-flex justify-content-center"
                style={{}}
                key={item.id}
              >
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body d-flex justify-content-around text-center">
                      <img
                        src={item.img}
                        alt=""
                        width={100}
                        height={100}
                        className=""
                      />
                      <div>
                        <h3 className="card-tille">Name</h3>
                        <p className="card-text">{item.name}</p>
                      </div>
                      <div>
                        <h3 className="card-tille">Amount</h3>
                        <p className="card-text">{item.amt}</p>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Fish */}

          {fish.map((item) => {
            return (
              <div
                className="row d-flex justify-content-center"
                style={{}}
                key={item.id}
              >
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body d-flex justify-content-around text-center">
                      <img
                        src={item.img}
                        alt=""
                        width={100}
                        height={100}
                        className=""
                      />
                      <div>
                        <h3 className="card-tille">Name</h3>
                        <p className="card-text">{item.name}</p>
                      </div>
                      <div>
                        <h3 className="card-tille">Amount</h3>
                        <p className="card-text">{item.amt}</p>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Food */}

          {food.map((item) => {
            return (
              <div
                className="row d-flex justify-content-center"
                style={{}}
                key={item.id}
              >
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body d-flex justify-content-around text-center">
                      <img
                        src={item.img}
                        alt=""
                        width={100}
                        height={100}
                        className=""
                      />
                      <div>
                        <h3 className="card-tille">Name</h3>
                        <p className="card-text">{item.name}</p>
                      </div>
                      <div>
                        <h3 className="card-tille">Amount</h3>
                        <p className="card-text">{item.amt}</p>
                      </div>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
}

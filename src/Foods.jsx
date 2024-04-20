import data from "./Food.json"
import { useContext } from "react";
import { cartContext } from "./App";

export default function Foods() {
  const { cardItem, setCardItem } = useContext(cartContext);

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((item) => {

const name = item.name.length > 20 ? item.name.substring(0, 20) + ".." : item.name;

  const addCard = () => {
    setCardItem([...cardItem, item]);
  };

  const removeCard = () => {
    setCardItem(cardItem.filter((c) => c.id !== item.id));
  };

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
                    <p className="card-text">{item.kg}</p>
                    <p className="card-text">
                      <strike className="text-muted"> Rs. {item.dis}</strike>
                      Rs.{item.amt}
                    </p>
                    {cardItem.includes(item) ? (
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
                    )}
      
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

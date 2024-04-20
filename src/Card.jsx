import { useContext, useEffect, useState } from 'react';
import { cartContext } from './App';

export default function Card() {

  const {cardItem,setCardItem} = useContext(cartContext);
  const [total,setTotal] = useState(0)

  useEffect( ()=>{
setTotal(cardItem.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  },[cardItem]) 



  return (
    <>
      <div className="container">
        <p className="text-center">Total Amount : {total}</p>
        {cardItem.map((item) => {
          const removeCard = () => {
            setCardItem(cardItem.filter((c) => c.id !== item.id));
          }
          return (
            <div className="row" key={item.id}>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body d-flex justify-content-around text-center">
                    <img src={item.img} alt="" width={100} height={100} />
                    <div>
                      <h3>Name </h3>
                      <p className="card-tittle">{item.name} </p>
                    </div>
                    <div>
                      <h3>Amount</h3>
                      <p className="card-tittle">{item.amt}</p>
                    </div>
                     <button
                        className="btn btn-danger"
                        onClick={removeCard}
                      >Remove Item </button>
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

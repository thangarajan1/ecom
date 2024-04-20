import React from 'react'
import img1 from "./pet.jpg"

export default function Contact() {
  return (
    <>
      <h1 className="text-center">Contact - Us</h1>
      <div className="container">
        <div className="row " style={{ textAlign: "justify" }}>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="" className="card-img" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p className="card-text">
              Pet animals are friendly animals that need love and affection from
              humans. They are the best friends of human beings. Pet animals are
              beautiful animals that need shelter for them to be protected.
              Dogs, cats, rabbits, and birds are the most popular pet animals.
            </p>
           
            <p className="card-text">
              A lot of people keep various breeds of dogs as their pet. They
              vaccinate them properly in order to avoid any diseases. They feed
              them properly so that they remain healthy for a long time. Dogs
              are very strong and brave. They protect us from strange people and
              thieves
            </p>
           
            <p className="card-text">
              Cats are also very popular pets. A lot of people keep multiple
              cats in their houses as pets. They are beautiful animals as well
              as silent. They keep animals like rats away from your house.
              People are very fond of them
            </p>
          </div>
        </div>
        <div>
          <address
            className="d-flex flex-column align-items-center justify-content-center fs-3"
            style={{ marginTop: "50px" }}
          >
            <h2>Address :</h2>
            <p>
              123 / a Main Street,
              <br />
              Bus Stand Opposite,
              <br />
              Tenkasi-627-808.
            </p>
          </address>
        </div>
      </div>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ backgroundColor: "#183153", padding: "20px 0px" }}
      >
        <a href="https://www.facebook.com/" style={{ color: "white" }}>
          <i
            style={{ fontSize: "2.2rem", fontWeight: "800" }}
            class="fa-brands fa-facebook"
          ></i>
        </a>
        <a href="https://www.instagram.com/" style={{ color: "white" }}>
          <i
            style={{ fontSize: "2.2rem", fontWeight: "800" }}
            class="fa-brands fa-instagram"
          ></i>
        </a>
        <a href="https://www.twitter.com/" style={{ color: "white" }}>
          <i
            style={{ fontSize: "2.2rem", fontWeight: "800" }}
            class="fa-brands fa-twitter"
          ></i>
        </a>
        <a href="https://www.linkedin.com/" style={{ color: "white" }}>
          <i
            style={{ fontSize: "2.2rem", fontWeight: "800" }}
            class="fa-brands fa-linkedin"
          ></i>
        </a>
      </div>
    </>
  );
}

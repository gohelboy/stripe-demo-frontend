import "./home.css";
import { useState } from "react";

const Home = () => {
  const [qty, setQty] = useState(1);

  const price = 4999

  const checkout = async () => {
    const res = await fetch("https://stripe-demo-backend.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: {
            name: "Grand Theft Auto IV",
            price: 4999,
            quantity: qty,
          },
        }),
      }
    );
    const data = await res.json();
    window.location.href = data.url;
  };
  return (
    <div className="home">
      <div className="container">
        <h1 className="logo">Stripe</h1>
        <div className="box-container">
          <div className="box">
            <div className="left">
              <div className="p-img">
                <img src="https://res.cloudinary.com/dezd4yvc4/image/upload/v1701771711/gtasix_fqhu4w.jpg" alt="devil may cry" />
              </div>
            </div>
            <div className="right">
              <div className="title">
                <h1>Grand Theft Auto IV</h1>
              </div>
              <div className="desc">
                <p>
                  GTA 6 is taking us back to Vice City. While the original game was set in 1986, this new 2025 release is set to take place in what appears to be a modern day setting.
                </p>
              </div>
              <div className="price">
                <h2>Rs. {price * qty}</h2>
              </div>
              <div className="qty-container">
                <button onClick={() => { if (qty > 1) { setQty(1); setQty(qty - 1); } }}> - </button>
                <h2>{qty}</h2>
                <button onClick={() => { setQty(qty + 1); }}> + </button>
              </div>
              <div className="order">
                <button onClick={checkout}>ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import axios from "axios";
import { useEffect, useState } from 'react';
import '../App.css';

function Prod() {
  const [data, setData] = useState([]);
  const [eff,setEff] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000");
        console.log(response.data.produit);
        setData(response.data.produit);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    setInterval(fetchData, 300);

  }, []);

  return (
    <>
      <div className="body">
        <h1>Vendre votre machine</h1>
        <br />
        <div className="card">Qte <sup>{eff}</sup></div>
        <br />

          {data && data.map((prod, i) => (
            <div className="produit" key={i}>
              <h3>* {prod.design} *</h3>
              <p><span>#{prod.marque} </span> 
                {prod.description}
              </p>
              <h5>
                Stock : {prod.stock}
                <br />
                Prix unitaire : {prod.prix}
              </h5>
              <button onClick={()=>setEff(eff+1)}>Acheter</button>
              {/* <a href={`/${prod._id}`}>Acheter</a> */}
            </div>
          ))}
        </div>

    </>
  );
}

export default Prod;

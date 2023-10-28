import React, { useState, useEffect } from "react";
import { backendUrl } from "../../config";
import elph from "../assets/el.jpg";
import elstyles from "./GetElectronics.module.css";


const GetElectronics = () => {
  const [show, showData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    const response = await fetch(`${backendUrl}/electronic`);
    const data = await response.json();
    showData(data);
    
  };
  
 useEffect(()=>{
  fetchData();

 },[])
 const TotalItems=show.length;
    
 

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return show.slice(startIndex, endIndex);
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div>
        <div className={elstyles.fashionmodel}>
          <img src={elph} alt="Furnitures Model" className={elstyles.modelimage} />
        </div>
        <div className={elstyles.electronicscontainer}>
          {paginateData().map((data) => (
            <div className={elstyles.card} key={data.itemName}>
              <img src={data.imageUrl} alt={data.itemName} />
              <div className={elstyles.cardbody}>
                <p className={elstyles.cardtext}>{data.itemName}</p>
              </div>
              <div className={elstyles.cardfooter}>
                <div className={elstyles.textmuted}>{`$${data.price}`}</div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={loadMore}
          className={elstyles.loadmore}
          disabled={currentPage * itemsPerPage >= show.length}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default GetElectronics;

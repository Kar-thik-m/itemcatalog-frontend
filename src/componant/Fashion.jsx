import React, { useState, useEffect } from "react";
import { backendUrl } from "../../config";
import Fph from "../assets/fph.jpg";
import Fashionstyles from "./Fashion.module.css";

const FashionModelPage = () => {
  const [show, showData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    const response = await fetch(`${backendUrl}/fashion`);
    const data = await response.json();
    showData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className={Fashionstyles.fashionmodel}>
        <img src={Fph} alt="Fashion Model" className={Fashionstyles.modelimage} />
        <p>Fashion items</p>
      </div>
      <div className={Fashionstyles.fashioncontainer}>
        {paginateData().map((data) => (
          <div className={Fashionstyles.card} key={data.itemName}>
            <img src={data.imageUrl} alt={data.itemName} />
            <div className={Fashionstyles.cardbody}>
              <p className={Fashionstyles.cardtext}>{data.itemName}</p>
            </div>
            <div className={Fashionstyles.cardfooter}>
              <small className={Fashionstyles.textmuted}>{data.price}</small>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={loadMore}
        className={Fashionstyles.loadMoreButton}
        disabled={currentPage * itemsPerPage >= show.length}
      >
       loadMore
      </button>
    </div>
  );
};

export default FashionModelPage;

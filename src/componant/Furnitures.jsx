
import React from 'react';
import additem from "../assets/furnitures.jpg"
import { useState, useEffect } from 'react';
import { backendUrl } from '../../config';
import Furstyles from "./Furnitures.module.css"

const FashionModelPage = () => {
  const [show, showData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async () => {
    const response = await fetch(`${backendUrl}/furnitures`);
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
      <div className={Furstyles.fashionmodel}>



        <img src={additem} class="img-fluid" alt="" className={Furstyles.modelimage}></img>
        <p>Furnitures Items</p>
      </div>
      <div className={Furstyles.fcontainer}>
        {paginateData().map((data) => (
          <div className={Furstyles.card} key={data.itemName}>
            <img src={data.imageUrl} />

            <p className={Furstyles.cardtext}>{data.itemName}</p>

            <div className={Furstyles.textmuted}>{`$ ${data.price}`}</div>

          </div>
        ))}
      </div>
      <button
        onClick={loadMore}
        className={Furstyles.loadMoreButton}
        disabled={currentPage * itemsPerPage >= show.length}
      >
        Load More
      </button>
    </div>
  );
}

export default FashionModelPage;
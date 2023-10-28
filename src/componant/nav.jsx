import React from "react";
import { Piechart } from "../chard/chard";
import styles from "../componant/Nav.module.css";

const Nav = () => {
    return (
        <div className={styles.back}>
            <div className={styles.navbar}>




                <h5 className="card-title"><i className="fa fa-superpowers" aria-hidden="true" ><b style={{ fontFamily: "unset", marginLeft: "20px" }}><h1>ITEMS CATALOG</h1></b></i>
                </h5>

            </div>
            <div className={styles.chart}>
               <Piechart/>
            </div>
        </div>
    );
}
export default Nav;
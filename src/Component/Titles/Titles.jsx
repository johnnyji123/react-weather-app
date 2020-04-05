import React, { Component } from "react";
import styles from "./Titles.module.scss";
class Titles extends Component {
    render() {
        return(
            <div className = {styles.title}>
                <h2>Weather Finder</h2>
                <p> Find out tempearture conditions and more</p>
            </div>
        )
    }
}
export default Titles;
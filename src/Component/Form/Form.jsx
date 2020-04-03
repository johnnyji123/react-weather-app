import React, { Component } from "react";
import styles from "./Form.module.scss";

class Form extends Component {
    render() {
        return(
            <div className = {styles.positionForm}>
            <form onSubmit = {this.props.getWeather}>
                <input type = "text" name = "city" placeholder = "city..."/>
                <input type = "text" name = "country" placeholder = "country..."/> <br></br>
                <button>Get Weather</button>
            </form>
            </div>
        )
    }
}
export default Form;
import React from "react";
import  {URL} from "./config";

export default class GetSquaresNumber {
    static async getAll(mode) {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            const squaresNumber = data[mode].field
        } catch (e) {
            console.log(e) 
          }
    }
}
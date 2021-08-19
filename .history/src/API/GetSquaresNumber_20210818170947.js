import React from "react";
import  {URL} from "./config";

export default class GetSquaresNumber {
    static async get(mode) {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            return data[mode].field
        } catch (e) {
            console.log(e) 
          }
    }
}
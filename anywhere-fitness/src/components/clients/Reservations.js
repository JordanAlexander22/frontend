import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "./API/axiosWithAuth";

export default function Reservations(){
    const [Reservation, setReservation] = useState([]);
    useEffect(() => {
        axiosWithAuth()
          .get("/api/client/reservations")
          .then(response => {
            console.log("This is the reservation list ", response);
            const data = response.data;
            setReservation(data);
          })
          .catch(error => {
            console.log("Data could not be retrieved", error);
          });
          
      }, [Reservation]);

          


    return (
        <h1>test</h1>
    )
}
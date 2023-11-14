import React from "react";
import { useParams } from "react-router-dom";
export default function DetailEvents() {
    const { id } = useParams();
    console.log(id)
    return (
        <div>Details todo:  {id}</div>
    )
}
//Imports
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

//Modify function
export function Modify() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [make, setMake] = useState("");
  const [partNo, setPartNo] = useState("");

  useEffect(() => {
    //Using axios to make get request for data to be edited
    axios
      .get("http://localhost:4000/api/car_parts/" + id)
      .then((response) => {
        setName(response.data.name);
        setImage(response.data.image);
        setMake(response.data.make);
        setPartNo(response.data.partNo);
      })
      .catch();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const editPart = {
      name: name,
      image: image,
      make: make,
      partNo: partNo,
    };

    //Using axios to make put request for editing data in database
    axios
      .put("http://localhost:4000/api/car_parts/" + id, editPart)
      .then()
      .catch();
  };

  return (
    //HTML Form using above functions to edit data 
    <div>
      <h3>Edit Part</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Edit Part Name: </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Edit Part Image: </label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Edit Part Make: </label>
          <input
            type="text"
            className="form-control"
            value={make}
            onChange={(event) => {
              setMake(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Edit Part Number: </label>
          <input
            type="text"
            className="form-control"
            value={partNo}
            onChange={(event) => {
              setPartNo(event.target.value);
            }}
          />
        </div>
        <input type="submit" value="Edit Part"></input>
      </form>
    </div>
  );
}

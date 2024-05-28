import React, { useState } from "react";

export const CreateInventory = (props) => {
  function generateId() {
    return Math.floor(Math.random() * 100);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.isEdit);
    if (props.isEdit) {
      props.arrayList.map((list, i) => {
        if (list.id == props.data.id) {
          // props.arrayList.splice(i, 1);
          list.title = props.data.title;
          list.description = props.data.description;
          list.Price = props.data.Price;
          list.discountPrice = props.data.discountPrice;
        }
      });
      props.setArrayList(props.arrayList);
      props.setIsEdit(false);
      props.setData("");
      console.log(props.data, "fffffff");
    } else {
      props.setArrayList([...props.arrayList, props.data]);
      props.setData({
        title: "",
        description: "",
        Price: "",
        discountPrice: "",
      });
      // handleInput("");
      console.log(props.data, "fffffff");
    }
  }
  function handleInput(e) {
    props.setData({
      ...props.data,
      [e.target.name]: e.target.value,
      id: props.isEdit ? props.data.id : generateId(),
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-2">
          <label>Title</label>
          <input
            required
            type="text"
            name="title"
            value={props.data.title}
            className="border"
            onChange={handleInput}
          />
          <label>description</label>
          <input
            required
            type="text"
            name="description"
            value={props.data.description}
            className="border"
            onChange={handleInput}
          />
          <label>Price</label>
          <input
            required
            type="text"
            name="Price"
            value={props.data.Price}
            className="border"
            onChange={handleInput}
          />
          <label>discountPrice</label>
          <input
            required
            type="text"
            name="discountPrice"
            value={props.data.discountPrice}
            className="border"
            onChange={handleInput}
          />
          {/* <label>Upload Image</label>
          <input required type="file" name="image" onChange={handleInput} /> */}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

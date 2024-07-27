import "./CreateProduct.scss";

import React, { Fragment, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetCategoryQuery } from "../../../context/api/categoryApi";
import useGetValue from "../../../hooks/useGetValue";

const initialState = {
  title: "",
  price: "",
  stock: "",
  desc: "",
};

const CreateProduct = () => {
  const [createProduct, { data, isLoading, isSuccess }] =
    useCreateProductMutation();

  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");
  const { data: categories } = useGetCategoryQuery();
  console.log(categories);
  const categoryItem = categories?.map((category) => (
    <option
      key={category.id}
      value={category.title.toLowerCase().split(" ").join("-")}
    >
      {category.title}
    </option>
  ));
  const { handleChange, setUser, user } = useGetValue(initialState);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const product = { ...user };
    product.category = category;
    const imagesArray = images.split("\n").map((image) => image.trim());
    product.images = imagesArray;
    product.price = +product.price;
    createProduct(product);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product created successfully !");
      setUser(initialState);
      setImages("");
      setCategory("");
    }
  }, [isSuccess]);

  return (
    <Fragment>
      <div className="create__product">
        <h2>Create product</h2>
        <form onSubmit={handleCreateProduct} className="create__product__form">
          <div className="create__product__form__input">
            <label htmlFor="">Title</label>
            <input
              value={user.title}
              onChange={handleChange}
              name="title"
              type="text"
            />
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Price</label>
            <input
              value={user.price}
              onChange={handleChange}
              name="price"
              type="text"
            />
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Stock</label>
            <input
              value={user.stock}
              onChange={handleChange}
              name="stock"
              type="text"
            />
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name=""
              id=""
            >
              <option value="">Choose</option>
              {categoryItem}
            </select>
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Image-url</label>
            <textarea
              value={images}
              onChange={(e) => setImages(e.target.value)}
              name="images"
            ></textarea>
          </div>
          <div className="create__product__form__input">
            <label htmlFor="">Desc</label>
            <textarea
              value={user.desc}
              onChange={handleChange}
              name="desc"
            ></textarea>
          </div>
          <button>Create</button>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateProduct;

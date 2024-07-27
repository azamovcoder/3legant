import "./ManageProduct.scss";

import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import React, { Fragment, useState } from "react";

import { CiEdit } from "react-icons/ci";
import DeleteProduct from "./deleteProduct/DeleteProduct";
import EditProduct from "./editProduct/EditProduct";
import { MdDeleteOutline } from "react-icons/md";
import Module from "../../../components/Module/Module";
import { NavLink } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useGetProductsQuery } from "../../../context/api/productApi";

const ManageProducts = () => {
  const [page, setPage] = useState(1);
  const { data: length } = useGetProductsQuery();
  const { data } = useGetProductsQuery({ page, limit: 8 });
  const pageLength = Math.ceil(length?.length / 10);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  console.log(data);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Fragment>
      <div className="manage__products">
        <h2>Manage Products</h2>
        <div className="manage__products__cards">
          {data?.map((el) => (
            <div key={el?.id} className="manage__products__cards__card">
              <div className="manage__products__cards__card__img">
                <NavLink to={`/singlePage/${el?.id}`}>
                  <img src={el?.images[0]} alt="product.png" />
                </NavLink>
              </div>
              <div className="manage__products__cards__card__info">
                <h3 className="manage__products__cards__card__title">
                  {el?.title}
                </h3>
                <div className="manage__products__cards__card__prices">
                  <span className="manage__products__cards__card__price">
                    ${el?.price}.00
                  </span>
                  <span className="manage__products__cards__card__old__price">
                    ${el?.oldPrice}
                  </span>
                </div>
                <div className="manage__products__cards__card__buttons">
                  <button
                    onClick={() => setEditProduct(el)}
                    className="manage__products__cards__card__buttons__edit"
                  >
                    <CiEdit />
                  </button>
                  <button
                    onClick={() => setDeleteProduct(el)}
                    className="manage__products__cards__card__buttons__delete"
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="manage__products__pagination">
          <Stack spacing={2}>
            <Pagination
              count={pageLength}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </div>
      </div>
      {deleteProduct ? (
        <Module close={() => setDeleteProduct(null)}>
          <DeleteProduct
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
          />
        </Module>
      ) : (
        <></>
      )}
      {editProduct ? (
        <Module width={600} close={setEditProduct}>
          <EditProduct
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
        </Module>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default ManageProducts;

import "../../manageCategory/deleteCategory/DeleteCategory.scss";

import React, { useEffect } from "react";

import { toast } from "react-toastify";
import { useDeleteProductMutation } from "../../../../context/api/productApi";

const DeleteProduct = ({ deleteProduct, setDeleteProduct }) => {
  const [deleteProductById, { isLoading, isSuccess }] =
    useDeleteProductMutation();

  const handleDeleteProduct = () => {
    deleteProductById(deleteProduct.id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product deleted successfully !");
      setDeleteProduct(null);
    }
  }, [isSuccess]);

  return (
    <section className="delete__category">
      <h4>
        Delete: <span>{deleteProduct.title} ? </span>
      </h4>
      <div className="delete__category__buttons">
        <button
          className="delete__category__close"
          onClick={() => setDeleteProduct(null)}
        >
          Close
        </button>
        <button
          className="delete__category__delete"
          onClick={handleDeleteProduct}
        >
          {isLoading ? "Loading..." : "Delete"}
        </button>
      </div>
    </section>
  );
};

export default DeleteProduct;

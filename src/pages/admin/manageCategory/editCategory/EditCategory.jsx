import "./EditCategory.scss";

import React, { useEffect } from "react";

import { toast } from "react-toastify";
import { useUpdateCategoryMutation } from "../../../../context/api/categoryApi";

const EditCategory = ({ editCategory, setEditCategory }) => {
  const [updateCategory, { isLoading, isSuccess }] =
    useUpdateCategoryMutation();

  const handleEditCategory = (e) => {
    e.preventDefault();
    const category = { ...editCategory };

    updateCategory({ body: category, id: category.id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Updated category successfully!");
      setEditCategory(null);
    }
  }, [isSuccess, setEditCategory]);

  return (
    <section className="edit__category">
      <form onSubmit={handleEditCategory}>
        <h3>Edit Category</h3>
        <label htmlFor="category">{editCategory.title}</label>
        <input
          value={editCategory.title}
          required
          onChange={(e) =>
            setEditCategory((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          name="title"
          id="category"
          placeholder="Category"
        />

        <div className="edit__category__buttons">
          <button
            className="edit__category__close"
            onClick={() => setEditCategory(null)}
            type="button"
          >
            Close
          </button>
          <button className="edit__category__save" type="submit">
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditCategory;

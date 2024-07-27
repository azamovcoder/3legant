import "./ManageCategory.scss";

import React, { Fragment, useState } from "react";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../../context/api/categoryApi";

import { CiEdit } from "react-icons/ci";
import DeleteCategory from "./deleteCategory/DeleteCategory";
import EditCategory from "./editCategory/EditCategory";
import { MdDeleteOutline } from "react-icons/md";
import Module from "../../../components/Module/Module";

const ManageCategory = () => {
  const { data } = useGetCategoryQuery();
  const [editCategory, setEditCategory] = useState(null);
  const [deleteCategoryById, setDeleteCategoryById] = useState(null);

  const handleEditCategory = (category) => {
    setEditCategory(category);
  };

  const handleDeleteCategory = (categoryId) => {
    deleteCategory(categoryId);
    setDeleteCategoryById(null);
  };

  return (
    <Fragment>
      <div className="manage__category">
        <h2>Manage Category</h2>
        <ul className="manage__category__list">
          {data?.map((el) => (
            <li key={el?.id}>
              <p>{el?.title}</p>
              <button
                onClick={() => handleEditCategory(el)}
                className="manage__category__list__edit"
              >
                <CiEdit />
              </button>
              <button
                onClick={() => setDeleteCategoryById(el)}
                className="manage__category__list__delete"
              >
                <MdDeleteOutline />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {editCategory ? (
        <Module bg={"red"} close={setEditCategory}>
          <EditCategory
            editCategory={editCategory}
            setEditCategory={setEditCategory}
          />
        </Module>
      ) : (
        <></>
      )}
      {deleteCategoryById ? (
        <Module close={setDeleteCategoryById}>
          <DeleteCategory
            deleteCategoryById={deleteCategoryById}
            setDeleteCategoryById={setDeleteCategoryById}
          />
        </Module>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default ManageCategory;

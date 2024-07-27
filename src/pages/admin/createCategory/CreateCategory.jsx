import "./CreateCategory.scss";

import React, { Fragment, useEffect } from "react";

import { toast } from "react-toastify";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";
import useGetValue from "../../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
};

const CreateCategory = () => {
  const [createCategory, { isSuccess }] = useCreateCategoryMutation();
  const { handleChange, setUser, user } = useGetValue(initialState);
  const navigate = useNavigate();
  const handleCreateCategory = (e) => {
    e.preventDefault();
    const category = { ...user };
    createCategory(category);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Category created successfully!");
      setUser(initialState);
      navigate("/admin/manage-category");
    }
  }, [isSuccess, setUser]);

  return (
    <Fragment>
      <div className="create__category">
        <h2>Create Category</h2>
        <form
          onSubmit={handleCreateCategory}
          className="create__category__form"
        >
          <div className="create__category__form__input">
            <label htmlFor="title">Title</label>
            <input
              value={user.title}
              required
              onChange={handleChange}
              name="title"
              type="text"
            />
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateCategory;

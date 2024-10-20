import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "../../hook/useOutsideClick";
import FullPageLoaderSpinner from "../../ui/FullPageLoaderSpinner";
import { FaPlus } from "react-icons/fa";
import Table from "../../ui/Table";
import { OverLay } from "../../ui/OverLay";
import CategoryForm from "./CategoryForm";
import { useGetAllCategory } from "./useGetAllCategory";
import ConfirmDeleteModal from "../../ui/ConfirmDeleteModal";
import { formatDate } from "../../utils/helper";

const Category = () => {
  const iconRef = useRef(null);
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllCategory();
  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setEditForm] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [isAddCategory, setAddCategory] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropDown = (index, event) => {
    event.stopPropagation();
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };
  useOutsideClick(iconRef, ".dropdown-menu", () => {
    setOpenDropdownIndex(null);
  });
  const handleDeleteClick = (id) => {
    setShowModal(true);
    setCategoryId(id);
    setOpenDropdownIndex(null);
  };
  const handleUpdateClick = (comment) => {
    setOpenDropdownIndex(null);
    setEditForm(true);
    setCategoryData(comment);
  };
  const handleOpenCategoryForm = () => {
    setAddCategory(true);
  };
  useEffect(() => {
    document.title = "TekMatas | Category";
    window.scrollTo({ top: 0 });
    return () => {
      document.title = "TekMatas | Category";
    };
  }, []);

  if (isLoading) return <FullPageLoaderSpinner />;

  return (
    <div className=" mt-10 md:mt-3 ml-3">
      <div className="flex items-center gap-5  mt-5">
        <span
          className="flex items-center gap-2 text-[#768191] dark:text-[#768191] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          back */}
        </span>
      </div>
      <div className="w-[96%] xl:w-[85%] overflow-y-auto shadow-sm  bg-white  rounded-[10px] dark:bg-[#0c1427]  p-4 mb-10 mt-10">
        <div className="py-5 flex flex-wrap items-center gap-4 justify-between">
          <h1 className="text-xl font-semibold dark:text-[#d0d6e1]">
            Category Overview
          </h1>
          <button
            type="button"
            onClick={handleOpenCategoryForm}
            className="bg-[#6C4DE6] flex items-center gap-2 hover:bg-[#7771cc] dark:hover:bg-[#584fd4] transition duration-500 ease-in-out px-[12px] py-[10px] text-white font-medium text-center text-[14px] rounded-[5px]"
          >
            <FaPlus /> Add New
          </button>
        </div>
        <Table>
          <Table.Header>
            <tr className="font-medium">
              <th
                scope="col"
                id="tre1"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                S/N
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Post Count
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Created Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Status
              </th>
              <th
                scope="col"
                id="tre7"
                className="px-6 py-3 text-[text-[#1D2235] dark:text-[#d4def1]"
              >
                Action
              </th>
            </tr>
          </Table.Header>
          <Table.Body
            data={data}
            render={(category) => (
              <>
                <Table.Row key={category.id}>
                  <td className="px-6 py-4 font-medium">
                    {String(category.id).padStart(3, "00")}
                  </td>
                  <td className="px-6 py-4 capitalize">{category.category}</td>
                  <td className="px-6 py-4">{category?.post?.length}</td>
                  <td className="px-6 py-4">
                    {formatDate(category?.created_at)}
                  </td>
                  <td className="px-6 py-4">{category.description}</td>
                  <td className="px-6 py-4 capitalize">
                    {category?.status === "inactive" && (
                      <span className="dark:bg-[#f7b84b] bg-[#f7b84b] bg-opacity-15 dark:bg-opacity-10 text-[#f7b84b] py-[4px] w-[70px] text-center inline-block px-[4.6pxpx] leading-[1.4] rounded-[6px] font-medium text-[11px]">
                        {category.status}
                      </span>
                    )}
                    {category?.status === "active" && (
                      <span className="dark:bg-[#56ffaa] bg-[#4dc187] bg-opacity-15 dark:bg-opacity-20 text-[#4dc187] py-[4px] w-[70px] text-center inline-block px-[4.6pxpx] leading-[1.4] rounded-[6px] font-medium text-[11px]">
                        {category?.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-[13px] relative whitespace-nowrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-7 dark:text-[#899BB1] text-[#899BB1] cursor-pointer dark:hover:bg-[#2D3748] hover:bg-slate-50 rounded-full"
                      onClick={(event) => handleDropDown(category?.id, event)}
                      ref={iconRef}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {openDropdownIndex === category?.id && (
                      <div className="dropdown-menu bottom-10 bg-white border  dark:border-[#2c3342] z-[30000] shadow-sm dark:bg-[#1a2236] w-[130px] rounded-md absolute right-14 py-2">
                        <ul className="list-none font-meduim space-y-1 text-[13.5px] cursor-pointer dark:text-[#eeee] text-[#000000]">
                          <li
                            className="dark:hover:bg-[#2e2d52f1] hover:bg-slate-100  dark:hover:text-white p-1 px-3"
                            onClick={() => handleUpdateClick(category)}
                          >
                            Edit
                          </li>
                          <li
                            className="dark:hover:bg-[#2e2d52f1] text-red-600  hover:bg-slate-100  font-medium p-1 px-3"
                            onClick={() => handleDeleteClick(category?.id)}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </Table.Row>
              </>
            )}
          />
        </Table>
      </div>
      {showEditForm && (
        <OverLay setShowModal={setAddCategory}>
          <CategoryForm
            setEditForm={setEditForm}
            setShowForm={setAddCategory}
            data={categoryData}
            showEditForm={showEditForm}
          />
        </OverLay>
      )}

      {isAddCategory && (
        <OverLay setShowModal={setAddCategory}>
          <CategoryForm setShowForm={setAddCategory} />
        </OverLay>
      )}
      {showModal && (
        <OverLay>
          <ConfirmDeleteModal
            setShowModal={setShowModal}
            categoryId={categoryId}
          />
        </OverLay>
      )}
    </div>
  );
};
export default Category;

import React from "react";
import Table from "../../ui/Table";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import { useNavigate } from "react-router-dom";
import { useUser } from "../authentication/useUser";
const UserRow = ({ data }) => {
  const naviagate = useNavigate();
  const { user } = useUser();
  return (
    <Table.Row>
      <td className="px-6 py-4 font-medium">{data.id}</td>
      <td className="px-6 py-4 ">
        <img
          src={user.user_metadata.avater}
          alt={user.user_metadata.fullname}
          className="w-[40px] h-[40px] rounded-full"
        />
      </td>
      <td className="px-6 py-4 ">{user.user_metadata.fullname}</td>
      <td className="px-6 py-4 ">{user.user_metadata.role}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">
        <span className="py-[0.28em] bg-lime-300 px-[0.8em] rounded-full text-white font-semibold text-[11px]">
          verified
        </span>
      </td>
      <td className="px-6 py-4">
        <span className="flex items-center gap-3  cursor-pointer">
          <span
            className="hover:bg-gray-100 p-1 rounded-full transition  duration-300 ease-in-out"
            onClick={() => naviagate("/admin/update")}
          >
            <HiPencil className="text-sky-400" />
          </span>

          <Modal>
            <Modal.Open opens={"user-delete"}>
              <span className="hover:bg-gray-100 p-1 rounded-full transition  duration-300 ease-in-ou">
                <HiTrash className="text-red-400 " />
              </span>
            </Modal.Open>
            <Modal.Window name={"user-delete"}></Modal.Window>
          </Modal>
        </span>
      </td>
    </Table.Row>
  );
};

export default UserRow;

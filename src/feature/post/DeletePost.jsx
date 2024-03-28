import React from "react";
import Modal from "../../ui/Modal";

const DeletePost = () => {
  return (
    <div>
      <Modal>
        <Modal.Open opens="post-delete"></Modal.Open>
        <Modal.Window name="post-delete"></Modal.Window>
      </Modal>
    </div>
  );
};

export default DeletePost;

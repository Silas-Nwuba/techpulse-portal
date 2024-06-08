import React from "react";
import { FaTimes } from "react-icons/fa";
const AdvertModal = ({ closeModal }) => {
  return (
    <div className="py-3 space-y-5">
      <span className="flex justify-between items-center cursor-pointer">
        <h3 className="text-lg font-semibold">Place Advert with us</h3>
        <span className="bg-stone-100 p-1 rounded-full" onClick={closeModal}>
          <FaTimes className="text-stone-500" />
        </span>
      </span>

      <span className="flex gap-2 flex-wrap">
        <h4>Send mail:</h4>
        <p>nwubasilas@yahoo.com </p>
      </span>
      <span className="flex gap-2 flex-wrap">
        <h4>Call us:</h4>
        <p>09126576061 or 07039303930</p>
      </span>
      <span className="flex gap-2 flex-wrap">
        <h4>WhatsApp us:</h4>
        <p>+2349126576061</p>
      </span>
    </div>
  );
};

export default AdvertModal;

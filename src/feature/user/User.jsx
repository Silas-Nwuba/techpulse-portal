// import React, { useEffect } from "react";
// import Button from "../../ui/Button";
// import Modal from "../../ui/Modal";
// import UserTable from "../user/UserTable";
// import SignupForm from "../authentication/SignUpForm";
// import { useUserDropdown } from "../../context/UserDropdownContextApi";

// const User = () => {
//   const { dispatch } = useUserDropdown();
//   useEffect(() => {
//     dispatch({ type: "closeUserDropdown", payload: false });
//   }, [dispatch]);
//   return (
//     <div className="mt-10  mb-10">
//       <span className="flex justify-between items-center">
//         <h1 className="text-2xl text-stone-600 font-semibold">Users</h1>
//         <Modal>
//           <Modal.Open opens="add-user">
//             <Button
//               name={"Add User"}
//               hover="hover:bg-sky-600"
//               width={"w-[100px]"}
//             ></Button>
//           </Modal.Open>
//           <Modal.Window name="add-user">
//             <SignupForm />
//           </Modal.Window>
//         </Modal>
//       </span>
//       <UserTable />
//     </div>
//   );
// };

// export default User;

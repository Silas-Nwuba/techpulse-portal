import React from "react";
import Table from "../../ui/Table";
import UserRow from "../user/UserRow";
const UserTable = () => {
  const obj = [
    {
      id: "001",
      image: "uifaces-popular-image.jpg",
      fullname: "Ebuka",
      role: "Administrator",
      email: "nwubasilas@yahoo.com",
      status: "Verfied",
    },
  ];
  return (
    <div className="bg-white shadow-sm rounded-sm p-4 mb-10">
      <Table>
        <Table.Header>
          <Table.Row>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Photo
            </th>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </Table.Row>
        </Table.Header>
        <Table.Body
          data={obj}
          render={(data) => <UserRow data={data} key={data.id} />}
        />
      </Table>
    </div>
  );
};

export default UserTable;

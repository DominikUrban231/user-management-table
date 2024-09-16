// components/UserTable.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setFilters } from "../redux/usersSlice";
import { RootState, AppDispatch } from "../redux/store";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
  background-color: #3f51b5;
  color: #fff;
  text-align: left;
  border-bottom: 2px solid #ddd;
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e7ff;
  }
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 10px;
  width: 90%;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #3f51b5;
    box-shadow: 0 0 8px rgba(63, 81, 181, 0.5);
  }
`;

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { filteredUsers, filters, status } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    dispatch(setFilters({ [key]: e.target.value }));
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Failed to load users.</p>;
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>
              Name
              <Input
                type="text"
                value={filters.name}
                onChange={(e) => handleFilterChange(e, "name")}
                placeholder="Search by name"
              />
            </Th>
            <Th>
              Username
              <Input
                type="text"
                value={filters.username}
                onChange={(e) => handleFilterChange(e, "username")}
                placeholder="Search by username"
              />
            </Th>
            <Th>
              Email
              <Input
                type="text"
                value={filters.email}
                onChange={(e) => handleFilterChange(e, "email")}
                placeholder="Search by email"
              />
            </Th>
            <Th>
              Phone
              <Input
                type="text"
                value={filters.phone}
                onChange={(e) => handleFilterChange(e, "phone")}
                placeholder="Search by phone"
              />
            </Th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;

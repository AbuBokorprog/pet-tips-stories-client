'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
  Button,
} from '@nextui-org/react';
import { useAllUsersHook } from '@/src/hooks/user/user.hook';
import { IUser } from '@/src/types/user.type';

export default function UsersPage() {
  const { data: users, isLoading, isError } = useAllUsersHook();
  const userData = users?.data?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users</div>;
  }

  const columns = [
    { name: 'USER', uid: 'user' },
    { name: 'EMAIL', uid: 'email' },
    { name: 'ACTIONS', uid: 'actions' },
  ];

  const renderCell = (user: IUser, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof IUser];

    switch (columnKey) {
      case 'user':
        return (
          <User avatarProps={{ src: user.profilePicture }} name={user.username}>
            {user.username}
          </User>
        );
      case 'email':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{user.email}</p>
          </div>
        );
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Promote to Admin">
              <Button size="sm">Promote</Button>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <Button size="sm" color="danger">
                Delete
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Users</h2>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={userData}>
          {(item: IUser) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

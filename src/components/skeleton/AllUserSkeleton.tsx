'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from '@nextui-org/react';

const AllUserSkeleton = () => {
  const columns = [
    { name: 'USER', uid: 'user' },
    { name: 'EMAIL', uid: 'email' },
    { name: 'ROLE', uid: 'role' },
    { name: 'ACTIONS', uid: 'actions' },
  ];

  const renderSkeletonCell = (columnKey: string) => {
    switch (columnKey) {
      case 'user':
        return (
          <div className="flex items-center gap-3">
            <Skeleton className="w-12 h-12 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
        );
      case 'email':
        return <Skeleton className="h-4 w-32" />;
      case 'role':
        return <Skeleton className="h-4 w-16" />;
      case 'actions':
        return (
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        );
      default:
        return <Skeleton className="h-4 w-20" />;
    }
  };

  return (
    <div className="p-4">
      <Skeleton className="h-8 w-48 mx-auto mb-4" />
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
        <TableBody>
          {[...Array(5)].map((_, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.uid}>
                  {renderSkeletonCell(column.uid)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUserSkeleton;

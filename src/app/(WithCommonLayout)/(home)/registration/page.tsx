'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Card, CardBody, CardHeader } from '@nextui-org/react';
import Link from 'next/link';
import { userRegisterMutation } from '@/src/hooks/auth';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/src/provider/user.provider';

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  profilePicture: string;
};

export default function RegistrationPage() {
  const router = useRouter();
  const { control, handleSubmit, watch, reset } = useForm<FormData>();

  const password = watch('password');

  const { mutate: register, isPending, isSuccess } = userRegisterMutation();

  const onSubmit = (data: FormData) => {
    register(data);
    reset();
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push('/login');
    }
  }, [isPending, isSuccess]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <title>Registration - PETS</title>
      <Card className="w-full max-w-lg">
        <CardHeader className="flex justify-center">
          <h2 className="text-2xl font-bold">Register</h2>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: 'Full Name is required' }}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label="Full Name"
                  placeholder="Enter your full name"
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Password is required', minLength: 6 }}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  errorMessage={error?.message}
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: 'Please confirm your password',
                validate: (value) =>
                  value === password || 'The passwords do not match',
              }}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  errorMessage={error?.message}
                />
              )}
            />
            {/* <Controller
              name="profilePicture"
              control={control}
              defaultValue=""
              rules={{ required: 'Full Name is required' }}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label="Full Name"
                  placeholder="Enter your full name"
                  errorMessage={error?.message}
                />
              )}
            /> */}

            <Button type="submit" color="primary" fullWidth>
              Register
            </Button>
          </form>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/login" color="primary">
              Already have an account? Login here
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

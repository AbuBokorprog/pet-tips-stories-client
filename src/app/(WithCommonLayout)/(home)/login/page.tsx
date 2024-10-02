'use client';

import React, { useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Card, CardBody, CardHeader } from '@nextui-org/react';
import Link from 'next/link';
import { userLoginMutation } from '@/src/hooks/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserContext } from '@/src/provider/user.provider';

type FormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { setLoading }: any = useContext(UserContext);
  const { control, handleSubmit, reset } = useForm<FormData>();
  const router = useRouter();
  const searchTerms = useSearchParams();
  const {
    mutate: loginHandler,
    data,
    isPending,
    isSuccess,
  } = userLoginMutation();

  const redirect = searchTerms.get('redirect');

  const onSubmit = (data: FormData) => {
    loginHandler(data);
    reset();
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      setLoading(true);
      if (redirect) {
        router.push(redirect);
      } else {
        router.push('/');
      }
    }
  }, [isPending, isSuccess]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader className="flex justify-center">
          <h2 className="text-2xl font-bold">Login</h2>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <Button type="submit" color="primary" fullWidth>
              Login
            </Button>
          </form>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/registration" color="primary">
              New user? Register here
            </Link>
            <Link href="/forgot-password" color="secondary">
              Forgot password?
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

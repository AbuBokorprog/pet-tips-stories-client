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

const Login = () => {
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

  const easyLoginHandler = (email: string, pass: string) => {
    const data = { email, password: pass };
    loginHandler(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <title>Login - PETS</title>
      <Card className="w-full max-w-lg">
        <CardHeader className="flex justify-center">
          <h2 className="text-2xl font-bold">Login</h2>
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-center gap-5 mb-6">
            <Button
              color="primary"
              onClick={() =>
                easyLoginHandler('superadmin@gmail.com', 'superadmin1234@')
              }
            >
              Admin
            </Button>
            <Button
              color="primary"
              onClick={() => easyLoginHandler('saidul@gmail.com', '123456')}
            >
              User
            </Button>
          </div>
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
            <div>
              <Link href="/registration" color="primary">
                New user? Register here
              </Link>
            </div>
            <div>
              <Link href="/forgot-password" color="secondary">
                Forgot password?
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;

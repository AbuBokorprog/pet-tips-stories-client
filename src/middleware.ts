import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getCurrentUser } from './services/auth/auth.services';
import { IUser } from './types/user.type';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const authRoutes = ['/login', '/registration'];

  type Role = keyof typeof Routes;

  const Routes = {
    admin: ['/admin-dashboard', '/admin-dashboard/:path*', '/profile'],
    user: ['/dashboard', '/dashboard/:path*', 'profile'],
  };

  const pathName = request.nextUrl.pathname;

  const user: any = await getCurrentUser();

  if (!user) {
    if (authRoutes.includes(pathName)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathName}`, request.url)
      );
    }
  }

  if (user?.role && Routes[user?.role as Role]) {
    const routes = Routes[user?.role as Role];

    if (routes.some((r: any) => pathName.match(r))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin-dashboard/:path*',
    '/login',
    '/registration',
  ],
};

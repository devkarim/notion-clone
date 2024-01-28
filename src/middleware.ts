import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

const DEFAULT_GUEST_REDIRECT_TO = '/';
const DEFAULT_USER_REDIRECT_TO = '/dashboard';

const USER_PAGES = ['/dashboard'];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options });
        },
      },
    }
  );
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if user is signed in and the current path is / redirect the user to /account
  if (user && !USER_PAGES.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(DEFAULT_USER_REDIRECT_TO, req.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && USER_PAGES.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(DEFAULT_GUEST_REDIRECT_TO, req.url));
  }

  return res;
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

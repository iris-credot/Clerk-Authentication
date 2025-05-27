'use client';

import { useRouter } from 'next/navigation';
import { SignIn, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function SignInPage() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded) return;
    if (isSignedIn) {
      router.push('/recipe'); // redirect signed in user
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) return null; // or spinner

  if (isSignedIn) return null; // or spinner while redirecting

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn fallbackRedirectUrl="/recipe" />
    </div>
  );
}

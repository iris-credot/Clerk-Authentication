import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Recipe Viewer</h1>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Link href="/recipe">View Recipes</Link>
      </SignedIn>
    </div>
  );
}
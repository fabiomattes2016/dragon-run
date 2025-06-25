import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
          <Zap className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Dragon Runner
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <SignedIn>
          <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <UserButton showName={true} />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
            >
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </nav>
    </header>
  );
}

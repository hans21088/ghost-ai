"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.push("/editor");
    } else {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-text-muted">Loading...</p>
    </div>
  );
}
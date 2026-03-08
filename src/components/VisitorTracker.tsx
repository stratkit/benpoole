"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function VisitorTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const visitor = searchParams.get("visitor");
    if (visitor) {
      sessionStorage.setItem("visitor", visitor);
    }
  }, [searchParams]);

  return null;
}

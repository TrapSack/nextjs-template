import { useRouter } from "next/router";

import { HomePage } from "@/src/pages/HomePage";

export default function Page() {
  const Router = useRouter();

  return <HomePage />;
}

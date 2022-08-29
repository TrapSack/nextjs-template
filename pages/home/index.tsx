import { HomePage } from "@/src/pages/HomePage";
import { useRouter } from "next/router";

export default function Page() {
  const Router = useRouter();

  return <HomePage />;
}



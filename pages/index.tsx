import { GetServerSideProps } from "next";

import { wrapper } from "@/features/Redux/store";
import { IndexPage } from "@/src/pages/IndexPage";

export default function Home() {
  console.log("WORK");
  return <IndexPage />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    return { props: {} };
  });

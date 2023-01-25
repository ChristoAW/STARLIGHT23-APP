import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/pages/_layout";
import Title from "@/components/pages/title";

export const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const baseTitle = "STARLIGHT 2023";
  const [titleSuffix, setTitleSuffix] = useState("");
	const [inView, setInView] = useState("ABOUT U<i>S</i>");

  const router = useRouter();

  useEffect(() => {
    const resetLayout = () => {
      setTitleSuffix("");
    };

    router.events.on("beforeHistoryChange", resetLayout);
    return () => {
      router.events.off("beforeHistoryChange", resetLayout);
    };
  }, [router]);

  return (
    <LayoutContext.Provider value={{ setTitleSuffix }}>
      <Title title={baseTitle + titleSuffix} />
      <Layout>{children}</Layout>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;

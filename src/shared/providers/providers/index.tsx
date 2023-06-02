"use server";

import { ReactQueryProvider } from "./react-query";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

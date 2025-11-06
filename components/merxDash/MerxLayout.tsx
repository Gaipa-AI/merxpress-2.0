import * as React from "react";
import { MerxLayoutProps } from "./types";

export const MerxLayout: React.FC<MerxLayoutProps> = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 py-36 bg-slate-100 max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[1720px] max-md:max-w-full">
        {children}
      </div>
    </div>
  );
};
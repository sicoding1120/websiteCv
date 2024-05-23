import classNames from "classnames";
import Link from "next/link";
import React from "react";

const BtnSocialMedia = ({
  bgIcons,
  children,
    key,
  name,
  href
}: {
  bgIcons: any;
  children: React.ReactNode;
  key: any;
    name: string | any
  href: any
  }) => {
  
  return (
    <Link href={href}
      className={classNames(
        `group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 to-black text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]`,
        {
          "bg-[#25D366]": bgIcons === "#25D366",
          "bg-[#24292F]": bgIcons === "#24292F",
          "bg-[#D13C98]": bgIcons === "#D13C98",
          "bg-[#0A66C2]": bgIcons === "#0A66C2",
        }
      )}
      key={key}
    >
      {children}
      <span className="capitalize pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
        {name}
      </span>
    </Link>
  );
};

export default BtnSocialMedia;

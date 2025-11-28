import type { ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

const Header = ({ image, children }:  HeaderProps ) => {
  return  <header className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
      <img
        src={image.src}
        alt={image.alt}
        className="w-14 h-14 object-contain"
      />
      <div className="text-gray-800">{children}</div>
    </header>
};

export default Header;

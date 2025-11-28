import type { ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode; // ReactNode type represents any valid React content that can be rendered such as elements, strings, numbers, fragments, portals, etc.
};

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header
      className="
        flex items-center gap-4
        bg-white
        p-4
        rounded-sketch border-pencil shadow-pencil
        filter-wobble
      "
    >
      <img
        src={image.src}
        alt={image.alt}
        className="
          w-14 h-14 object-contain
          border-pencil rounded-sketch shadow-pencil
        "
      />

      <div className="text-4xl font-hand tracking-wide filter-wobble">
        {children}
      </div>
    </header>
  );
};

export default Header;

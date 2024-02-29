"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function MenuButton() {
  const pathname = usePathname();
  const elem = useRef();

  const toggleMenu = () => {
    elem.current.classList.toggle("show");
    elem.current.parentNode.classList.toggle("show");
  };

  const closeMenu = () => {
    elem.current.classList.remove("show");
    elem.current.parentNode.classList.remove("show");
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div ref={elem} onClick={toggleMenu} className="menu-button">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { getHeader } from "../../api/controllers/headerController";
import MenuButton from "@/components/menuButton";
import StrapiImage from "./StrapiImage";
import HeaderMenu from "./HeaderMenu";
import NotificationBar from "./NotificationBar";

export default function Header({
  menu: { links = [], image } = {},
  notificationBar: { content = "", button = {}, show = true },
}) {
  const [isVisible, setIsVisible] = useState(show);
  return (
    <header className={`header  ${isVisible ? "show--notification" : ""}`}>
      <NotificationBar
        content={content}
        buttonHref={button.href}
        buttonText={button.text}
        hide={() => setIsVisible(false)}
      />
      <div className="container">
        <div className="logo">
          <Link href="/">
            <StrapiImage src={image?.url} alt="C10 Labs" />
          </Link>
        </div>
        <HeaderMenu links={links} />
      </div>
      <MenuButton />
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logo} alt="logo image" priority />
          Nextlevel food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={path.startsWith("/meals") ? classes.active : ""}
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={path.startsWith("/community") ? classes.active : ""}
              >
                Foddies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

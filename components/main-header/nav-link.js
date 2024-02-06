"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const selectedStyle = path.startsWith(href)
    ? `${styles.link} ${styles.active}`
    : styles.link;
  return (
    <Link href={href} className={selectedStyle}>
      {children}
    </Link>
  );
};

export default NavLink;

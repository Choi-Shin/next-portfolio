import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useCallback, useEffect } from "react";

export default function Header() {
  const list = ["Intro", "Skills", "Profile", "Projects", "Contact"];
  const scrollChange = () => {};
  return (
    <>
      <div className={styles.Header}>
        <header className={styles.userNav}>
          <ul>
            {list.map((l, i) => (
              <li key={i}>
                <Link legacyBehavior href={"#" + i}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </>
  );
}

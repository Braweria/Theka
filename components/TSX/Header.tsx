import Link from "next/link";
import styles from "../SCSS/components/navbar.module.scss";

export default function Header() {

  return (
    <header className={styles.header}>
      <nav id={styles["top-navbar"]}>
        <ul>
          <li><Link href="/"><a>Frontpage</a></Link></li>
          <li><Link href="/books"><a>Books</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
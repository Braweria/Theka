import Link from "next/link";
import styles from "../SCSS/components/footer.module.scss";

const currentYear = new Date().getFullYear();


export default function Footer() {
  return (
  <footer className={styles.footer}>
      <nav className={styles["footer-navbar"]}>
        <ul>
          <li><Link href="/books"><a>Browse through the books</a></Link></li>
          <li><Link href="/releases"><a>Check out the latest chapters</a></Link></li>
          <li><Link href="/authors"><a>Learn about the authors</a></Link></li>
          <li><Link href="/"><a>Back to the frontpage</a></Link></li>
        </ul>
        <ul>
          <li><Link href="/books"><a>Browse through the books</a></Link></li>
          <li><Link href="/releases"><a>Check out the latest chapters</a></Link></li>
          <li><Link href="/authors"><a>Learn about the authors</a></Link></li>
          <li><Link href="/"><a>Back to the frontpage</a></Link></li>
        </ul>
      </nav>
      <nav className={styles["footer-important-navbar"]}>
        <ul>
          <li><Link href="/terms-of-service"><a>Terms of Service</a></Link></li>
          <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
        </ul>
      </nav>
      <p className={styles["copyright-notice"]}>
        {currentYear} (c) WP Book Theme designed and developed by Wiktoria Mielcarek
        (Braweria) - https://braweria.de
      </p>
    </footer>
  );
}
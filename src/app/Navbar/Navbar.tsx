// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="brand-name">Christopher Forsythe</div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
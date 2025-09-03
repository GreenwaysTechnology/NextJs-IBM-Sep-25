'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import './links.css'

export default function NavBar() {
    const pathname = usePathname()
    return <nav>
        <ul>
            <li>
                <Link className={`${pathname === '/about' ? 'active' : ''}`} href={{ pathname: '/about' }}>About</Link>
            </li>
            <li>
                <Link className={`${pathname === '/services' ? 'active' : ''}`} href={{ pathname: '/services' }}>Services</Link>
            </li>
            <li>
                <Link className={`${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
            </li>
              <li>
                <Link className={`${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </nav>
}
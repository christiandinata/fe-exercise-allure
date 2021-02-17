import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about-me'>About Me</Link>
                </li>
                <li>
                    <Link href='/weather'>Weather</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav

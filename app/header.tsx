import Image from 'next/image'
import sean from '../public/sean.jpeg'
import Link from 'next/link'
import './globals.css'



export default function Header() {


    return (
        <header>
            <div className="profile_pic">
                <Image
                    alt="profile pic"
                    src={sean}
                    layout="responsive"
                    height={40}
                    width={40}
                />
            </div>
            <ul>
                <li>
                    <Link href="">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link href="">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="">
                        CV
                    </Link>
                </li>
                <li>
                    <Link href="">
                        Contact
                    </Link>
                </li>
            </ul>
        </header>
    )
}

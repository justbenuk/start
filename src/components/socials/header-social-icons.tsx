import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HeaderSocialIcons() {
  return (
    <div className="hidden lg:flex flex-row items-center justify-center gap-2">
      <Link href={'/'}>
        <FaInstagram className="size-5" />
      </Link>
      <Link href={'/'}>
        <FaFacebook className="size-5" />
      </Link>
      <Link href={'/'}>
        <FaXTwitter className="size-5" />
      </Link>
      <Link href={'/'}>
        <FaLinkedin className="size-5" />
      </Link>
    </div>
  )
}


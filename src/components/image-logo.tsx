import Image from "next/image";
import Link from "next/link";

export default function ImageLogo() {
  return (
    <Link href={'/'}>
      <Image src={'/assets/me.png'} alt="image logo" height={35} width={35} className="rounded-full border-3 border-indigo-500" />
    </Link>
  )
}


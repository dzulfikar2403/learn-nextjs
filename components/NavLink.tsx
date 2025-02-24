'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlink = ({href,children}:{href:string,children:React.ReactNode}) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={pathName === href ? `text-lg font-semibold  bg-stone-200 rounded px-4 py-1` : `text-lg font-semibold rounded px-4 py-1`}>{children}</Link>
  )
}

export default Navlink
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListCard = ({news}:{news:any[]}) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
        {news.map((el) => (
          <li className="rounded-lg overflow-hidden bg-slate-800 hover:bg-slate-700" key={el.id}>
            <Link href={`/news/${el.slug}`} >
              <div className="relative w-full h-56">
                <Image src={`/images/news/${el.image}`} alt={`${el.image}`} fill className="object-cover object-center" />
              </div>
              <p className="text-center font-semibold py-2">{el.title}</p>
            </Link>
          </li>
        ))}
      </ul>
  )
}

export default ListCard
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="home_container">
      <h1 className="home_header">Velkommen til Zandiii</h1>
      <p className="home_subtext">
        Oplev lækre produkter, der passer til din stil og smag. Fra eksklusive varer til skønne gaver, vi har det hele!
      </p>
      <Link href="/products"className="home_button">
         Se vores lækkerier her!
      </Link>
      <Image
        src= "/bg.jpg"
        alt="Lækre produkter"
        width={500}
        height={350}
        className="home_image"
      />
    </div>
  )
}

import Link from "next/link"

export default function Home() {
  return (
    <div >
      <h1>Velkommen til Zandiii</h1>
      <Link href="/products">
      <a>Se vores lækkerier her!</a>
      </Link>
    </div>
  )
}

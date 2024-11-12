import Link from "next/link"

export default function Home() {
  return (
    <div >
      <h1>Velkommen til Zandiii</h1>
      <Link href="/products">
      Se vores lækkerier her!
      </Link>
    </div>
  )
}

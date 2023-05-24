import Link from "next/link";

export default function Lista({ params: { slug } }) {
  return (
    <div>
      <h1>LISTA</h1>
      <p>{slug || 'nada a mostrar'}</p>
      <Link href='/'>home</Link>
    </div>
  )
}

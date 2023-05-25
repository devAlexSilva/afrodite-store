const subCategories = [
  { name: 'Chinelos', href: '#' },
  { name: 'Tênis', href: '#' },
  { name: 'Blusas', href: '#' },
  { name: 'Bermudas', href: '#' },
  { name: 'Bolsas', href: '#' },
  { name: 'Colares', href: '#' },
  { name: 'kit acessorios', href: '#' },
  { name: 'Carteira', href: '#' },
]

export function Categories({isMobile}) {
  return (
    <form className={`${isMobile ? 'mt-4 border-t border-gray-200' : 'hidden lg:block'}`}>
      <h3 className="sr-only">Categories</h3>
      <ul role="list" className="px-2 py-3 font-medium text-gray-900">
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href} className="block px-2 py-3">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </form>
  )
}

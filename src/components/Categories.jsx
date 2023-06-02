import { useEffect, useState } from "react"
import { client } from "../../sanity/lib/client"

const query = '*[_type == "category"]'
export function Categories({ isMobile }) {
  const [category, setCategory] = useState([])

  const listOfCategories = async () => {
    const data = await client.fetch(query)
    setCategory(data)
    console.log(data)
  }

  useEffect(() => { listOfCategories() }, [])

  return (
    <aside className={`${isMobile ? 'mt-4 border-t border-gray-200' : 'hidden lg:block'}`}>
      <h3 className="sr-only">Categories</h3>
      <ul role="list" className="px-2 py-3 font-medium text-gray-900">
        {category.map((category) => (
          <li key={category._id}>
            <a href='#' title={category.title} className="block px-2 py-3 hover:opacity-50">
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

import { client } from "../../sanity/lib/client"
import { useEffect, useState } from "react"
import { urlForImage } from "../../sanity/lib/image"

const query = '*[_type == "product"]'


export function GridProducts() {
  const [productsList, setProdutcList] = useState()

  const fetchData = async () => {
    const products = await client.fetch(query)
    setProdutcList(products)
    console.log(products)
  }

  useEffect(() => { (async () => await fetchData())() }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chinelos</h2>
        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-12 md:gap-x-4 lg:grid-cols-3 xl:gap-x-6">

          {productsList && productsList.map((product) => (
            <article key={product._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                <img
                  src={urlForImage(product.mainImage)}
                  alt={product.mainImage.alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md text-gray-700">
                    <a href={`/product/${product.slug.current}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/*SE TIVER TAG DE PROMOÇÃO <p className="mt-1 text-sm text-gray-500">{product?.tags || ''}</p> */}
                </div>
                <p className="text-md font-medium text-gray-900">{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</p>
              </div>
            </article>
          ))}

        </div>
      </div>
    </div>
  )
}

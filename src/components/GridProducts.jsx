import { products } from "@/constants/products"

export function GridProducts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chinelos</h2>

        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-12 md:gap-x-4 lg:grid-cols-3 xl:gap-x-6">
          {products.map((product) => (
            <article key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}


{/* <div className="bg-white">
                    <div className="mx-auto max-w-3xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-0">
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Chinelos</h2>

                      <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-10 md:gap-x-4 lg:grid-cols-3 xl:gap-x-6">
                        {products.map((product) => (
                          <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </div>
                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                              <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> */}
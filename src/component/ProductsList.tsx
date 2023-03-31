import React from 'react'
import { IProduct } from '../interfaces/product'

type ProductsListProps = {
  products: IProduct[];
  onRemove: (id: number | string) => void;
}

const ProductsList = ({products, onRemove}: ProductsListProps) => {
  if(!products) return <div>Loading....</div>
  return (
    <div>
      {products?.map((item: IProduct, index) => (
        <div key={index}>{item.name}
          <button onClick={() => onRemove(item._id)}>Click</button>
        </div>
      ))}
    </div>
  )
}

export default ProductsList
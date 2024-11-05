import Image from 'next/image';
import React from 'react';

interface IProductCardProps {
  name: string;
  description: string;
  imageURL: string;
  price: number;
}

interface IProductCard {
  product: IProductCardProps;
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {
  return (
    <div className="flex h-[353.33px] w-[175px] flex-col justify-between">
      <div>
        <Image
          src={product.imageURL}
          alt={product.name}
          width={175}
          height={233}
          className="rounded-xl"
        />
      </div>
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="price">
            <p className="text-2xl font-bold">{product.price} руб</p>
          </div>
          <div className="product-name leading-5">{product.name}</div>
        </div>
        <div className="h-7 w-full rounded-xl bg-black">
          <p className="text-center font-bold text-white">To cart</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

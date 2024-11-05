import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="flex w-[175px] flex-col">
      <div>
        x`
        <Image
          src={`/products/shpatlevka-gerkules.jpeg`}
          alt="shpatlevka-gerkules"
          width={175}
          height={233}
          className="rounded-xl"
        />
      </div>
      <div>
        <div className="price">
          <p className="text-2xl font-bold">890 руб</p>
        </div>
        <div className="product-name leading-5">Шпаклевка финишная полимерная GT-53 GERKULES</div>
      </div>
      <div className="h-7 w-full rounded-xl bg-black">
        <p className="text-center font-bold text-white">To cart</p>
      </div>
    </div>
  );
}

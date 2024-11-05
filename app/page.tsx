import Header from '@/app/components/Header';
import ProductCard from '@/app/components/ProductCard';
import data from '@/app/utils/data';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="products-wrapper flex w-full flex-wrap justify-between gap-4 px-[10px] pt-[30px]">
        {data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

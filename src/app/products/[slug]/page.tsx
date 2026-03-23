import { notFound } from "next/navigation";
import Image from "next/image";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Navbar from "@/components/layout/Navbar";

// Fungsi format uang Rupiah
const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

// Generate static params for SSG
export async function generateStaticParams() {
  const products = productsData as Product[];
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div className="flex flex-col-reverse lg:flex-row gap-4 mb-10 lg:mb-0">
            <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-visible">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-amber-500 flex-shrink-0 cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="relative w-full aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-5 rounded-2xl overflow-hidden bg-muted flex-grow h-[400px] lg:h-[600px] shadow-sm">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-10 px-2 sm:px-0 lg:mt-0 lg:pt-8 flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              {product.name}
            </h1>
            <div className="mb-6">
              <span className="text-3xl font-bold text-amber-700">
                {formatRupiah(product.price)}
              </span>
            </div>

            <div className="mb-8">
              <h3 className="sr-only">Deskripsi</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            <div className="border-t border-b border-border py-6 mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Material
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {product.material}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Dimensi
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {product.dimensions}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6 flex gap-4">
              <WhatsAppButton
                productName={product.name}
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

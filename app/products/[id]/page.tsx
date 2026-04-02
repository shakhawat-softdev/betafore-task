import Image from "next/image";
import Link from "next/link";
import { Footer, Header, Reveal, SectionNotice } from "@/components";
import { getProductByIdAction } from "@/app/actions/catalog";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return (
      <div className="min-h-screen bg-[#f9f9f9]">
        <Header />
        <main className="max-w-[1200px] mx-auto px-4 py-8">
          <SectionNotice message="Invalid product id." />
        </main>
        <Footer />
      </div>
    );
  }

  const result = await getProductByIdAction(productId);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <Reveal y={10}>
          <Link
            href="/products"
            className="text-sm font-semibold text-[#00b4b4] hover:underline"
          >
            Back to products
          </Link>
        </Reveal>

        {!result.ok ? (
          <div className="mt-4">
            <SectionNotice message={result.error} />
          </div>
        ) : (
          <Reveal delay={0.05}>
            <section className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="relative h-[360px] w-full rounded bg-white">
                  <Image
                    src={result.data.image}
                    alt={result.data.title}
                    fill
                    loading="eager"
                    quality={85}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                <div>
                  <p className="mb-2 text-sm uppercase tracking-wide text-gray-500">
                    {result.data.category}
                  </p>
                  <h1 className="text-2xl font-extrabold text-gray-900">
                    {result.data.title}
                  </h1>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-3xl font-extrabold text-[#00b4b4]">
                      ${result.data.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-gray-600">
                    Rating {result.data.rating.rate} ({result.data.rating.count}{" "}
                    reviews)
                  </p>

                  <p className="mt-6 leading-7 text-gray-700">
                    {result.data.description}
                  </p>
                </div>
              </div>
            </section>
          </Reveal>
        )}
      </main>
      <Footer />
    </div>
  );
}

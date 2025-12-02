import { AppStoreBadge } from "./components/AppStoreBadge";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center px-6 max-w-3xl">
        {/* Top Image */}
        <div className="flex justify-center">
          <img
            src="/postgresmac-elephant.png"
            alt="PostgresMac"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <section className="space-y-14">
          {/* Product Name */}
          <h1 className="text-7xl font-semibold text-gray-900">PostgresMac</h1>

          {/* Download Button */}
          <div className="flex justify-center">
            <a href="#" className="inline-block scale-150">
              <AppStoreBadge />
            </a>
          </div>

          {/* Tagline */}
          <p className="text-4xl font-semibold max-w-xl mx-auto">
            Lightweight and native PostgreSQL client for Mac.
          </p>
        </section>
      </div>
    </div>
  );
}

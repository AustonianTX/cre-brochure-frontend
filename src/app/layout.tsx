import "../styles/globals.css";

import HeaderMenu from "@/components/HeaderMenu";

export const metadata = {
  title: "AI CRE Demos",
  description:
    "These are basic demos which use AI to build real estate data from brochure style text and files.",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <HeaderMenu />
        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
              <div className="px-4 py-4 sm:px-6">
                {children}
                {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

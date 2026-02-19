import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type PageLayoutProps = {
  imageSrc: string;
  alt?: string;
  headerContent?: React.ReactNode;
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({
  imageSrc,
  alt = "Page header",
  headerContent,
  children,
}) => {
  return (
    <div className="overflow-hidden">
      <header className="relative">
        <Navbar />
        <div className="relative h-[70vh] w-full">
          <img
            src={imageSrc}
            alt={alt}
            className="h-full w-full object-cover object-bottom"
          />
          {headerContent ? (
            <>
              <div
                className="absolute inset-0 bg-black/40"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                {headerContent}
              </div>
            </>
          ) : null}
        </div>
      </header>

      <main className="mb-16 text-lg">{children}</main>

      <Footer />
    </div>
  );
};

export default PageLayout;

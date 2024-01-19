"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-20 px-5 sm:px-10">
      <h2 className="mb-5 text-gray-900 font-bold text-2xl md:text-2xl lg:text-4xl uppercase">
        Say Hello!
      </h2>
      <div className="flex flex-wrap">
        <div className="sm:flex-1 col-6 w-6/12 sm:w-4/12 flex flex-col">
          <Link
            target="_blank"
            href="https://www.behance.net/anthonyagbator"
            className="footer-link"
          >
            Behance
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/anthony-agbator"
            className="footer-link"
          >
            Linkedin
          </Link>
          <Link
            target="_blank"
            href="https://github.com/aagbator"
            className="footer-link"
          >
            github
          </Link>
        </div>
        <div className="sm:flex-1 col-6 w-6/12 sm:w-4/12 flex flex-col">
          <Link
            target="_blank"
            href="https://www.instagram.com/anthonyagbator"
            className="footer-link"
          >
            Instagram
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/channel/UCi10T744ctNQK85_OaQFihg"
            className="footer-link"
          >
            Youtube
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com/anthonyagbator"
            className="footer-link"
          >
            Twitter(X)
          </Link>
        </div>
        <div className="mt-5 sm:mt-0 w-full col-12 col-4 sm:w-4/12">
          <h5 className="text-gray-900 uppercase mb-2 font-semibold">Email</h5>
          <Link
            className="text-gray-900"
            target="_blank"
            href="mailto:agbatoreanthony@gmail.com"
          >
            Agbatoreanthony@gmail.com
          </Link>
        </div>
      </div>
      <section className="py-2 mt-10 text-black font-medium">
        <span>AA. &copy; 2024</span>
      </section>
    </footer>
  );
};

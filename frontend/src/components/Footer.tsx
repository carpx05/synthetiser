// import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 text-gray-500 text-xs sm:text-sm text-center">
      {/* Projet développé avec ❤️ par Ayush Mishra */}

      <div className="footer footer-center p-8 bg-base-200 text-base-content rounded mt-6">
        <nav>
          <div className="flex justify-center items-center gap-3">

            <a 
            href="https://www.linkedin.com/in/ayuush-mishra/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
            </a>
            <a
              href="https://www.instagram.com/ayuushmishraa" 
              target="_blank" 
              rel="noopener noreferrer"
            >
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/carpx05/synthetiser"
            >
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Projet développé avec ❤️ par Ayush Mishra</p>
          <nav className="gflex justify-center items-center gap-3">
            <a
              href="https://carpx05.github.io/"
              className="link link-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              carpx05.github.io
            </a>
          </nav>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

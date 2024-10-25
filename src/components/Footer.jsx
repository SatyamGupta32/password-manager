import logo from "../assets/logo.png";
import instagram from "../assets/instagram.svg";
import love from "../assets/heart.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="flex md:flex-row flex-col justify-center items-center md:w-[350px] mb-4 md:mb-0">
            <div>
              <a href="/home" className="flex items-center py-4 px-2">
                <span className="text-red-700 text-2xl font-bold">&lt;</span>
                <img
                  src={logo} // Path to your logo image
                  alt="Logo"
                  width={40} // Set the width of the logo
                  height={40} // Set the height of the logo
                  className="mr-2"
                />
                <span className="font-semibold text-white text-sm">Vault</span>
                <span className="font-semibold text-red-700 text-sm">
                  Guard
                </span>
                <span className="text-red-700 text-2xl font-bold">/&gt;</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm lg:block hidden">
              platform for awesome services.
            </p>
          </div>

          {/* Navigation as */}
          <div className="flex space-x-6 md:w-[350px] justify-center">
            <a href="/" className="text-gray-400 hover:text-white text-sm">
              Home
            </a>
            <a href="/about" className="text-gray-400 hover:text-white text-sm">
              About
            </a>
            <a
              href="/services"
              className="text-gray-400 hover:text-white text-sm"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white text-sm"
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-4 md:mt-0 md:w-[350px]">
            <a href="https://facebook.com" className="text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12C22 5.925 17.075 1 11 1S0 5.925 0 12c0 5.55 4.03 10.125 9.3 10.938v-7.734h-2.8V12h2.8V9.765c0-2.795 1.661-4.33 4.191-4.33 1.217 0 2.488.21 2.488.21v2.755h-1.4c-1.38 0-1.81.857-1.81 1.733V12h3.07l-.491 3.204h-2.579v7.734C19.97 22.125 24 17.55 24 12z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.34-1.6.57-2.46.67a4.3 4.3 0 0 0 1.88-2.36 8.57 8.57 0 0 1-2.73 1.04 4.3 4.3 0 0 0-7.37 3.9 12.2 12.2 0 0 1-8.85-4.48 4.3 4.3 0 0 0 1.33 5.73 4.26 4.26 0 0 1-1.95-.54v.05a4.3 4.3 0 0 0 3.45 4.21 4.32 4.32 0 0 1-1.94.07 4.3 4.3 0 0 0 4.02 2.98A8.64 8.64 0 0 1 1 19.54a12.19 12.19 0 0 0 6.57 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.69 8.69 0 0 0 24 4.56a8.44 8.44 0 0 1-2.44.67z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
            >
              <img
                src={instagram} // Path to your logo image
                alt="Logo"
                width={25} // Set the width of the logo
                height={25} // Set the height of the logo
                className="mr-2"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </div>

          <div className="mt-1 text-center text-gray-400 text-sm flex justify-center items-center">
            <span>created with</span>
            <img className="w-10 mx-1" src={love} alt="" />
            <span>by Satyam Gupta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

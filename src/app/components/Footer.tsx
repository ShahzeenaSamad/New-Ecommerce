

import { BsEnvelope } from "react-icons/bs";
import { TiSocialTwitter, TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">ShopStyle</h3>
            <p className="text-sm mb-4">
              We offer a variety of clothes that suit your style. From trendy fashion for women to men, find what you love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <TiSocialTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <TiSocialFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <IoLogoInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                <IoLogoGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:text-gray-900">About</a></li>
              <li><a href="#features" className="text-sm hover:text-gray-900">Features</a></li>
              <li><a href="#works" className="text-sm hover:text-gray-900">Works</a></li>
              <li><a href="#careers" className="text-sm hover:text-gray-900">Career</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#support" className="text-sm hover:text-gray-900">Customer Support</a></li>
              <li><a href="#delivery" className="text-sm hover:text-gray-900">Delivery Details</a></li>
              <li><a href="#terms" className="text-sm hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#privacy" className="text-sm hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter and get the latest offers directly in your inbox.</p>
            <div className="flex items-center space-x-2">
              <BsEnvelope className="text-xl text-gray-700" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 text-white py-4 mt-12">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-center items-center">
          <p className="text-sm items-center">&copy; 2000-2023 ShopStyle. All Rights Reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dog } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Dog className="h-8 w-8 text-blue-600" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/breeds" className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Breeds</Link>
                <Link to="/adoption" className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Adoption</Link>
                <Link to="/care" className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Care</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-blue-600 hover:bg-blue-100 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/breeds" className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Breeds</Link>
            <Link to="/adoption" className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Adoption</Link>
            <Link to="/care" className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Care</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

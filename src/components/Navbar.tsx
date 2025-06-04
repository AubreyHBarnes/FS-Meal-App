import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
    <nav className="flex items-center p-4 border-gray-200">
        <Link href="/" className="flex items-center text-gray-900 font-medium text-lg no-underline hover:text-blue-600">
            <img
                src="/home-icon.svg"
                alt="Home"
                className="w-6 h-6 mr-2"
            />
            Home
        </Link>
    </nav>
);

export default Navbar;

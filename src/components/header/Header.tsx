import React from 'react';
import { Link } from 'react-router-dom';
/** Hook */
import useHeader from '@/hook/useHeader';
/** Components */
import HeaderLink from '@components/header/HeaderLink';
import MobileHeader from '@components/header/MobileHeader';
/** Style */
import { Popover } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const { handleOpenHeader } = useHeader();

  return (
    <div className="bg-black">
      {/* Mobile menu */}
      <MobileHeader/>

      {/* Desktop menu */}
      <header className="relative bg-white border-b border-gray-200">

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex h-16 items-center justify-between">

              {/* Main Header Logo */}
              <div className="flex lg:ml-0">
                <Link to="/">
                  <h1 className="text-base font-black uppercase font-mono">working tool</h1>
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full">
                  <HeaderLink path='/' pathName='Home'/>

                  <HeaderLink path='/query' pathName='query'/>

                  <HeaderLink path='/brand' pathName='brand list'/>
                </div>
              </Popover.Group>

              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={handleOpenHeader}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;
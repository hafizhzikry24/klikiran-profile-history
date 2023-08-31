import React from 'react';
import Logo from '../assets/favicon-32x32.png';


function Header() {
  return (
    <header class="text-[#D2E9E9] body-font bg-red-500 py-3 ">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img alt="gallery"  src={Logo}/>
                <span class="ml-3 text-2xl text-white">Desa Klikiran</span>
            </a> 
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a href="#intro" class="mr-5 hover:text-white">Profil </a>
                <a href="#histo" class="mr-5 hover:text-white">Sejarah </a>
                <a href="#content" class="mr-5 hover:text-white">Periode </a>
                <a href="#images" class="mr-5 hover:text-white">Dokumentasi </a>
                {/* <a href="#contact" class="mr-5 hover:text-white">Kontak </a> */}
            </nav>

        </div>
    </header>
      
  );
}

export default Header;

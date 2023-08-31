import React from 'react';
import downloadImage from '../assets/download.png';


function Intro() {
  return (
    <div className="section-histo container mx-auto px-4 py-8 motion-safe:animate-fadeIn " id='histo'>
     <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Profil Desa Klikiran</h1>
    
    <div className="flex">
      <div className="w-1/4">
      <img
        src={downloadImage}
        alt="Gambar Desa"
        className="w-full h-auto rounded-lg"
      />
      </div>
      <div className="w-3/4 pl-8 ">
        <h2 className="text-2xl font-bold mb-4">Desa Klikiran</h2>
        <p className="text-gray-700 mb-4">
        Klikiran adalah salah satu Desa atau Kelurahan di Kecamatan Jatibarang, Kabupaten Brebes, Provinsi Jawa Tengah.
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <h3 className="text-xl font-bold mb-2">Populasi</h3>
            <p className="text-gray-700">1.550 jiwa</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Kecamatan</h3>
            <p className="text-gray-700">Kecamatan Jatibarang</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <h3 className="text-xl font-bold mb-2">Kode Pos</h3>
            <p className="text-gray-700">52261</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Kabupaten</h3>
            <p className="text-gray-700">Kabupaten Brebes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
  
}

export default Intro;
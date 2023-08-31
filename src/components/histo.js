import Peta from '../assets/peta.png';
import React from 'react';

function Histo() {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 section-intro " id="intro">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <h1 className="motion-safe:animate-fadeIn max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sejarah Desa Klikiran</h1>
            <p className="motion-safe:animate-fadeIn max-w-2xl mb-2 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">Awal berdirinya Desa Klikiran yaitu pada sekitar Tahun 1808, datang  seorang pengembara yang singgah di Desa Klikiran. Asal mula nama Desa Klikiran yaitu Kebon Gadung yaitu daerah yang banyak tumbuhan gadung, pendatang tersebut bermukim di desa Klikiran dan membuka lahan pertanian untuk makan sehari-hari, setelah beberapa lama datang lagi seorang pengembara yang singgah di Desa Klikiran beliau tertarik untuk tinggal di Desa Klikiran karena melihat kesuburan tanahnya. Setelah beberapa saat terjadi perebutan kekuasaan atas wilayah Klikiran antara pengembara satu dan pengembara dua, maka terjadi perkelahian, dua pengembara tersebut mempunyai kesaktian yang berbeda saat peperangan pengembara satu sedang membajak tanah dan di serang oleh pengembara dua dengan serangan hujan dan angin maka pengembara satu tanahnya kebanjiran, maka pengembara satu tersebut membelah tanah tanah di tengah sawah menjadi sungai kecil untuk membuang air yang sampai saat ini sungai tersebut masih ada yang dinamakan sungai Kuta (Kali Kuta). Mulai saat itu kedua pengembara tersebut berdamai dan membagi Desa Klikiran menjadi dua pedukuhan yaitu pedukuhan dusun Klikiran dan Desa Klikiran, mulai saat itu ke dua pengembara tersebut menetap di masing-masing wilayah pedukuhan dan mempunyai keturunan. Hingga sekarang makam kedua pengembara tersebut masih ada di Desa Klikiran dan di jaga masyarakat setempat yang di jadikan makam keramat desa.</p>
            
          
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex rounded-lg mt-4 motion-safe:animate-fadeIn">
            <img
              src={Peta}
              alt="Gambar Desa"
              className="w-full h-auto rounded-lg object-cover lg:object-center"
            />
          </div>
        </div>

{/* <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h1 class="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sejarah Desa Klikiran</h1>
        
      </div>
      <img
              src={Peta}
              alt="Gambar Desa"
              className="w-full h-auto rounded-lg object-cover lg:object-center"
            />
    </div>
  </div> */}

{/* <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      <h1 class="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sejarah Desa Klikiran</h1>
     
      <img
              src={Peta}
              alt="Gambar Desa"
              className="w-full h-auto rounded-lg object-cover lg:object-center"
            />
    
  </div> */}


      </section>
  );
}

export default Histo;
import React from 'react';
import MonoHafizh from '../assets/hafizh_mono.png';
import MonoSapaw from '../assets/mono-sapaw.png';
import MonoPat from '../assets/mono-pat.png';
import MonoIca from '../assets/mono-ica.png';
import MonoPink from '../assets/mono-pink.png';
import MonoSul from '../assets/mono-sul.png';
import MonoIcad from '../assets/mono-icad.png';
import MonoOnat from '../assets/mono-onat.png';
import MonoIndah from '../assets/mono-indah.png';


function Images() {
    return (
        <section class="text-gray-600 body-font content-images bg-gray-200 " id='images'>
        <div class="container px-5 py-24 mx-auto motion-safe:animate-fadeIn">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Dokumentasi KKN TIM II UNDIP DESA KLIKIRAN</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> KKN TIM II UNDIP melakukan kegiatan KKN di desa Klikiran yang berlangsung selama 45 hari, berikuit adalah dokumentasi hasil kegiatan yang kami publikasikan ke media digital</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoHafizh}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Teknik Komputer</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Muhammad Hafizh Zikry</h1>
                  <a class="leading-relaxed" href='https://www.kompasiana.com/hafizhtekkom20/64d8f7164addee3806193532/penginputan-data-administrasi-dengan-perangkat-desa-di-desa-klikiran-menggunakan-microsoft-exl'>Pengecekan dan Re-konfigurasi Local Area Network (LAN)
Di Desa Klikiran</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoSapaw}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Sastra Indonesia</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shafa Az-Zahra Putri Erwin</h1>
                  <a href='https://www.kompasiana.com/kknklikiranundip/64d894c408a8b572676efc72/pojok-baca-untuk-semua-dari-mahasiswa-undip-untuk-siswa-siswi-sekolah-dasar-di-desa-klikiran' class="leading-relaxed">Pojok Baca untuk Semua! Dari Mahasiswa Undip untuk Siswa-Siswi Sekolah Dasar di Desa Klikiran</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoPat}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Manajemen</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Patricia Shelma K</h1>
                  <a href="https://www.kompasiana.com/patriciashelma4055/64daf1a14addee0f1e4229c5/pengedukasian-kepada-masyarakat-ditengah-maraknya-pinjaman-online-illegal"class="leading-relaxed">Pengedukasian Kepada Masyarakat di Tengah Maraknya Pinjaman Online Illegal</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoIca}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Bioteknologi</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Risya Nurrahma</h1>
                  <a href="https://www.kompasiana.com/amp/risyanurrahma1436/64d9ca864addee037a795c22/pentingnya-probiotik-dalam-tubuh-melalui-produk-yoghurt" class="leading-relaxed">Pentingnya Probiotik dalam Tubuh Melalui Produk Yoghurt</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoPink}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Perikanan Tangkap</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Pinky Zalfa Octavianty</h1>
                  <a href="https://www.kompasiana.com/pinky170323/64da44914addee58b77d1fc3/manfaatkan-e-commerce-mahasiswa-kkn-tim-ii-undip-bantu-kembangkan-umkm-olahan-bandeng-presto" class="leading-relaxed">Mahasiswa KKN Tim II UNDIP Bantu Kembangkan UMKM Olahan Bandeng Presto</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoSul}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Psikologi</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Mutya Kristy Sulba</h1>
                  <a href='https://www.kompasiana.com/mutyakristy/64dad1f208a8b51b5922dcc2/anak-juga-ingin-dihargai-mahasiswa-kkn-tim-ii-undip-kenalkan-positive-parenting-pada-para-ibu-di-de' class="leading-relaxed">Anak Juga Ingin Dihargai! Mahasiswa KKN Tim II Undip Kenalkan Positive Parenting pada Para Ibu di Desa Klikira</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoIcad}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Sejarah</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Muhammad Irsyad Syafiy</h1>
                  <a href="https://www.kompasiana.com/muhammadirsyadsyafiy0565/64dd21f64addee5064565eb2/fun-learning-history-cerdas-cermat-sejarah-islam" class="leading-relaxed">Fun Learning History: Cerdas Cermat Sejarah Islam</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoOnat}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Hukum</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Jonathan Mishael Christopher</h1>
                  <a href='https://www.kompasiana.com/jonathan75723/64d9b97b633ebc2359406482/waspada-penipuan-online-mahasiswa-tim-ii-kkn-undip-beri-edukasi-hukum-cegah-penipuan-online#' class="leading-relaxed">Waspada Penipuan Online! Mahasiswa Tim II KKN Undip Beri Edukasi Hukum Cegah Penipuan Online</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={MonoIndah}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Administrasi Publik</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Indah Permata Sari</h1>
                  <a href='https://www.kompasiana.com/indahpermatasari8908/64db20cd633ebc46982d5292/pengadaan-alur-pelayanan-publik-dan-jenis-pelayanan-di-balai-desa-klikiran' class="leading-relaxed">Pengadaan Alur Pelayanan Publik dan Jenis Pelayanan di Balai Desa Klikiran</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Images;


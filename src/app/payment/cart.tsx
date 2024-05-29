import React from 'react';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Keranjang Kamu</h2>
      <p className="mb-4">Pembelian kamu meliputi</p>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-4">
          <Image src="/images/class/class1.png" alt="Class Image" width={80} height={80} className="rounded" />
          <div>
            <p>Manajemen Keuangan Pribadi</p>
            <p className="font-bold">Rp.235.000</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/images/class/class2.png" alt="Class Image" width={80} height={80} className="rounded" />
          <div>
            <p>Manajemen Keuangan Pribadi</p>
            <p className="font-bold">Rp.235.000</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Kode Kupon"
          className="p-2 border rounded-l-md flex-grow"
        />
        <button className="bg-blue-600 text-white p-2 rounded-r-md">Terapkan</button>
      </div>
      
      <div className="border-t pt-4 space-y-2 mb-6">
        <h3 className="text-xl font-bold text-blue-600 mb-2">Ringkasan</h3>
        <div className="flex justify-between">
          <p>Manajemen Keuangan Pribadi</p>
          <p>Rp.235.000</p>
        </div>
        <div className="flex justify-between">
          <p>Manajemen Keuangan Pribadi</p>
          <p>Rp.235.000</p>
        </div>
        <div className="flex justify-between">
          <p>Diskon</p>
          <p>Rp.0</p>
        </div>
        <div className="flex justify-between">
          <p>Kode unik</p>
          <p>266</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>TOTAL</p>
          <p>Rp.470.266</p>
        </div>
      </div>
      
      <div className="text-red-500 text-sm mb-4">
        <p>⚠️ Kamu harus masuk terlebih dahulu</p>
      </div>
      
      <button className="bg-blue-600 text-white w-full p-4 rounded-lg text-lg font-bold">
        BELI SEKARANG
      </button>
    </div>
  );
};

export default Cart;

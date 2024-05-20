import React from "react";
import Image from "next/image";

function Partner() {
  return (
    <div className="bg-gray-100 py-4">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-4 text-blue-400">
        Kerjasama Internasional
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-2 px-2">
        <div className="w-1/3 sm:w-1/4 md:w-1/6">
          <Image
            src="/images/partner/kerjasama1.png"
            alt="KDU University"
            width={160}
            height={90}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6">
          <Image
            src="/images/partner/kerjasama2.png"
            alt="European University of Applied Sciences"
            width={160}
            height={90}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 sm:w-1/5 md:w-1/6">
          <Image
            src="/images/partner/kerjasama3.png"
            alt="University of King Saud"
            width={160}
            height={90}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6">
          <Image
            src="/images/partner/kerjasama4.png"
            alt="Other University"
            width={160}
            height={90}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6">
          <Image
            src="/images/partner/kerjasama5.png"
            alt="Another University"
            width={160}
            height={90}
            layout="responsive"
          />
        </div>
        <div className="w-1/3 sm:w-1/4 md:w-1/6">
          <Image
            src="/images/partner/kerjasama6.png"
            alt="Last University"
            width={160}
            height={90}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}

export default Partner;

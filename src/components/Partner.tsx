import React from "react";
import Image from "next/image";

function Partner() {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-center text-xl md:text-3xl font-bold mb-8 text-blue-600">
        Kerjasama Internasional
      </h2>
      <div className="flex justify-center items-center space-x-4 px-4 overflow-x-auto">
        <div className="flex-shrink-0">
          <Image
            src="/images/partner/kerjasama1.png"
            alt="KDU University"
            width={160}
            height={90}
            layout="intrinsic"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/partner/kerjasama2.png"
            alt="European University of Applied Sciences"
            width={160}
            height={90}
            layout="intrinsic"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/partner/kerjasama3.png"
            alt="University of King Saud"
            width={160}
            height={90}
            layout="intrinsic"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/partner/kerjasama4.png"
            alt="Other University"
            width={160}
            height={90}
            layout="intrinsic"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/partner/kerjasama5.png"
            alt="Another University"
            width={160}
            height={90}
            layout="intrinsic"
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/partner/kerjasama6.png"
            alt="Last University"
            width={160}
            height={90}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
}

export default Partner;

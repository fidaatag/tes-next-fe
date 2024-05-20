import React from "react";
import CourseCard from "./CourseCard";

function About() {
  return (
    <div className="p-6 md:p-16 flex flex-col md:flex-row">
      <div className="md:w-2/3 md:pr-8">
        <h2 className="text-3xl md:text-4xl text-blue-600 font-bold">
          Tentang Kelas ini
        </h2>
        <p className="mt-2 text-gray-500">1.201 Dilihat</p>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit
          placerat convallis. Sed blandit dolor id tortor congue molestie.
          Phasellus suscipit, dui nec egestas sollicitudin, lorem lorem laoreet
          purus, quis molestie augue ipsum a nibh. Vivamus sed rhoncus magna.
          Suspendisse blandit neque interdum sapien luctus, quis finibus velit
          elementum. Sed ut ullamcorper est. Donec facilisis mi sed vehicula
          posuere. Etiam aliquet ultrices orci, a egestas ante porttitor id.
          Suspendisse at purus eu augue semper mattis in in dui.
        </p>
        <p className="mt-4 text-gray-700">
          Duis ultricies porttitor commodo. Mauris nec rutrum turpis.
          Suspendisse ante sem, tempus gravida ante quis, convallis fringilla
          nibh. Morbi sem leo, tempus eu dictum vitae, dictum non quam. Donec
          sagittis, purus a finibus vehicula, odio orci finibus risus, id
          euismod neque sapien dictum purus. Curabitur nec placerat augue. Sed
          et tortor et enim fringilla commodo in sed nisi. Vivamus sodales
          tincidunt erat vel efficitur.
        </p>
        <p className="mt-4 text-gray-700">
          Suspendisse iaculis, dolor ac tempus iaculis, erat mauris tempor mi,
          vel ultrices mi dui sed lorem. Suspendisse et est et nisi convallis
          laoreet. Suspendisse eu felis nunc. Suspendisse sed iaculis tellus.
          Vestibulum ultrices dolor ac mollis auctor. Nullam ac lobortis tortor,
          dapibus semper metus. Vivamus et metus nibh. Suspendisse magna elit,
          accumsan id rhoncus in, pretium quis lacus. Duis id elementum tortor.
          Phasellus a porttitor mi, id laoreet nunc. Wuis lacus. Duis id
          elementum tortor. Phasellus a porttitor mi, id laoreet nunc. quis
          lacus. Duis id elementum tortor. Phasellus a porttitor mi, id laoreet
          nunc.
        </p>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/3">
        <CourseCard />
      </div>
    </div>
  );
}

export default About;

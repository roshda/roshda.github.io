import fs from 'fs';
import path from 'path';
import Image from 'next/image';

// Instagram Icon SVG
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-instagram inline-block align-text-bottom ml-1"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const OrigamiGallery = async () => {
  const imagesDirectory = path.join(process.cwd(), 'public/origami/images');
  const filenames = fs.readdirSync(imagesDirectory);

  const images = filenames.map((filename) => {
    const title = filename
      .split('.')[0] // Remove the file extension
      .replace(/-/g, ' '); // Replace hyphens with spaces

    return {
      src: `/origami/images/${filename}`,
      title: title,
    };
  });

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Origami Gallery
      </h1>
      <p className="mb-4">
        Works I've folded since 2019. Most are traditional designs, or variations by me on hydrangeas (fractal patterns) and tessellations. See more on
        <a
          href="https://www.instagram.com/origami_duck/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 inline-flex items-center ml-1"
        >
          Instagram
          <InstagramIcon />
        </a>
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center bg-black">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-2 text-center text-white w-full">{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrigamiGallery;

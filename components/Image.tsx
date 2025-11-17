import { fetchImages, getProducts } from "@/db/actions";
//import { Product } from "@/db/definitions";

export const ImageGallery: React.FC = async () => {
  const images = await fetchImages();
  const products = await getProducts();

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="border p-2 rounded-lg shadow-md">
          <img
            src={image.image_url}
            alt={image.name}
            className="w-full h-auto object-cover rounded"
          />
          <p className="mt-2 text-center text-slate-700">{image.name}</p>
          <p>Json</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                {JSON.stringify(image, null, 2)}
            </pre>
          {/* <p>{JSON.stringify(image.images, null,1)}</p> */}
        </div>
      ))}
      {products.map((product) => (
        <div key={product.id} className="border p-2 rounded-lg shadow-md">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-auto object-cover rounded"
          />
          <p className="mt-2 text-center text-slate-700">{product.title}</p>
          
        </div>
      ))}


    </div>
  );
};
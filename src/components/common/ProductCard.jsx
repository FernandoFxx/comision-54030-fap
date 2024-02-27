export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-10">
      <img class="w-full" src={img} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">{description}</p>
      </div>
      <div class="px-6 pt-4 pb-2 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {price}
        </span>
      </div>
    </div>
  );
};

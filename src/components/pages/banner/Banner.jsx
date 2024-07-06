function Banner() {
  return(
    <div className="relative shadow banner bg-white font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-pink-500 before:opacity-50">
      
      <div className="min-h-[350px] relative  h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h1 className="sm:text-6xl text-4xl font-bold uppercase mb-6">Yadiis Store</h1>
        <p className="sm:text-2xl text-base text-center text-gray-200">Sean Bienvenidos Todos</p>
      </div>
    </div>
  ) 
}

export default Banner;

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-700 font-bold text-white text-center md:text-2xl mb-4 p-4">
      <a className="flex items-center gap-x-4" href="/">
        <img className="size-16 md:size-24" src="/logo.png" alt="Logo"></img>
        <p>Home</p>
      </a>
      <a href="/favorites">
        <img className="size-10" src="heart.svg"></img>
      </a>
    </header>
  );
};

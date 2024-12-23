export const Footer = () => {
  return (
    <footer className="flex p-4 mt-4 justify-between items-center bg-gray-700 text-white text-sm md:text-base">
      <section className="flex flex-col">
        <a href="/">Home</a>
        <a href="/vehicles">Search</a>
        <a href="https://github.com/victortedesco" target="_blank">
          Contact
        </a>
      </section>
      <p>Made with ❤️ by Victor Tedesco</p>
    </footer>
  );
};

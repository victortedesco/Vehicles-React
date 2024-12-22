export const Footer = () => {
  return (
    <footer className="flex justify-between text-sm md:text-base items-center bg-gray-700 p-4 text-white">
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

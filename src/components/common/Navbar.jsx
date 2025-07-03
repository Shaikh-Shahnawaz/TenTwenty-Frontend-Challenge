"use client";
const Navbar = () => {
  return (
    <nav className="w-[96%] absolute top-[20px] mx-6 p-6 bg-white text-black flex items-center justify-between z-15">

      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/team">Our Team</a></li>
        <li><a href="/enquiry">Make Enquiry</a></li>
      </ul>

      <div className="text-sm font-medium cursor-pointer hover:text-blue-400 transition border-1 border-black px-4 py-2">
        Contact us →
      </div>
    </nav>
  );
};

export default Navbar;

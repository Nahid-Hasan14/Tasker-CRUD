export default function Header() {
  return (
    <div>
      <nav className="py-6  md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <h1 style={{ fontSize: "30px" }}>Nav Bar</h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

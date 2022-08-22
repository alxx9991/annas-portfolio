const Header = () => {
  const highlight =
    "font-semibold underline decoration-primary decoration-[2.5px] underline-offset-2";
  return (
    <div className="full-width-section flex-row-reverse backdrop-blur-xl z-10 sticky top-0 hidden md:flex">
      <nav className="py-8 px-16 flex flex-row gap-8 font-medium">
        <a href="">
          <span className={highlight}>H</span>
          ome
        </a>
        <a href="">
          <span className={highlight}>A</span>bout
        </a>
        <a href="">
          <span className={highlight}>P</span>rojects
        </a>
        <a href="">
          <span className={highlight}>C</span>ontact
        </a>
      </nav>
    </div>
  );
};

export default Header;

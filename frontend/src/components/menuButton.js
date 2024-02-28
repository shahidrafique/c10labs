"use client";
export default function MenuButton() {
  function toggleMenu(e) {
    e.target.classList.toggle("show");
    e.target.parentNode.classList.toggle("show");
  }

  return (
    <div onClick={toggleMenu} className="menu-button">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

interface ButtonColoredProps {
  title?: string; // Making the 'title' prop optional
}

function ButtonColored({ title = "Button" }: ButtonColoredProps) {
  return (
    <div className="rounded-xl py-4 text-center cursor-pointer text-lg bg-brand-orange w-[280px] z-10 shadow-sm text-white font-bold">
      {title}
    </div>
  );
}

export default ButtonColored;

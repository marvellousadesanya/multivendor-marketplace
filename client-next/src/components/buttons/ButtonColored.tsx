interface ButtonColoredProps {
  title?: string; // Making the 'title' prop optional
}

function ButtonColored({ title = "Button" }: ButtonColoredProps) {
  return (
    <div className="rounded-xl py-3 text-center cursor-pointer text-sm bg-brand-orange px-4 z-3 shadow-sm text-white font-bold">
      {title}
    </div>
  );
}

export default ButtonColored;

interface ButtonWhiteProps {
  title?: string; // Making the 'title' prop optional
}

function ButtonWhite({ title = "Button" }: ButtonWhiteProps) {
  return (
    <div className="rounded-xl py-4 text-center cursor-pointer text-lg bg-white w-[280px] z-10 shadow-sm text-brand-orange font-bold">
      {title}
    </div>
  );
}

export default ButtonWhite;

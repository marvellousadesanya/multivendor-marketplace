import ButtonColored from "../buttons/ButtonColored";

export default function LogoutPopup() {
  return (
    <div className="rounded-xl">
      <p>Are you sure you want to log out?</p>
      <div className="flex justify-center gap-2">
        <button className="bg-[#D4D4D4] text-[#003049] rounded-md px-4 py-3">
          Cancel
        </button>
        <ButtonColored title="Yes" />
      </div>
    </div>
  );
}

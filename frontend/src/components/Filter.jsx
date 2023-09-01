const Filter = () => {
  return (
    <div className="sticky h-full top-0 w-[250px] font-innerbody text-[#00304] space-y-12 bg-[#fff] pl-8">
      <div className="flex justify-between">
        <h3 className="text-[32px] font-semibold">Filter</h3>
        <div className="text-[#F77F00]">Clear all</div>
      </div>

      <div className="flex flex-col ">
        <h4 className="text-2xl font-semibold">Type</h4>
        <div className="flex space-x-3">
          <input type="checkbox" className="" />
          <span>Desktop</span>
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Laptop</span>
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Mobile</span>
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Tablet</span>
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-semibold">Manufacturer</h4>
        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Apple</span>
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Samsung</span>
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>HP</span>
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Lenovo</span>
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-semibold">Colour</h4>
        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Blue</span>
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          Black
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Red</span>
        </div>

        <div className="flex space-x-3">
          <input type="checkbox" />
          <span>Orange</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;

const Filter = () => {
  return (
    <div className="font-innerbody text-bodyColor space-y-12">
      <div className="flex justify-between">
        <h3 className="text-[32px] font-semibold">Filter</h3>
        <div className="text-mainColor">Clear all</div>
      </div>

      <div className="flex flex-col">
        <h4>Type</h4>
        <div>
          <input type="checkbox" />
          Desktop
        </div>
        <div>
          <input type="checkbox" />
          Laptop
        </div>
        <div>
          <input type="checkbox" />
          Mobile
        </div>
        <div>
          <input type="checkbox" />
          Tablet
        </div>
      </div>

      <div>
        <h4>Manufacturer</h4>
        <div>
          <input type="checkbox" />
          Apple
        </div>
        <div>
          <input type="checkbox" />
          Samsung
        </div>
        <div>
          <input type="checkbox" />
          HP
        </div>
        <div>
          <input type="checkbox" />
          Lenovo
        </div>
      </div>

      <div>
        <h4>Colour</h4>
        <div>
          <input type="checkbox" />
          Blue
        </div>
        <div>
          <input type="checkbox" />
          Black
        </div>
        <div>
          <input type="checkbox" />
          Red
        </div>
        <div>
          <input type="checkbox" />
          Orange
        </div>
      </div>
    </div>
  );
};

export default Filter;

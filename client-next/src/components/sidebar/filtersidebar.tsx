"use client";

import { Checkbox } from "@nextui-org/react";

export default function FilterSideBar() {
  return (
    <aside className="w-[22.5rem] h-full space-y-7 text-[#6C6C6C] p-5 sticky top-0">
      <div className="sticky top-0">
        <div className="flex items-center justify-between h-5 ">
          <h3 className="text-lg font-semibold">Filter</h3>
          <p className="text-brand-orange text-xs">Clear all</p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center sticky top-0">
          <p className="text-lg font-semibold">Type</p>
          <p className="text-xs text-brand-orange">Clear</p>
        </div>

        <div className="flex gap-1 flex-col pt-2">
          <Checkbox radius="sm" size="sm" color="warning">
            Desktops
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            Laptops
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            Phones
          </Checkbox>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Manufacturer</h2>
          <p className="text-brand-orange text-xs">Clear</p>
        </div>

        <div className="flex flex-col gap-1 pt-2">
          <Checkbox radius="sm" size="sm" color="warning">
            Apple
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            Samsung
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            HP
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            LG
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            Laptops
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            Tecno
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            Infinix
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            Motorola
          </Checkbox>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Colour</h3>
          <p className="text-xs text-brand-orange">Clear</p>
        </div>

        <div className="flex flex-col gap-1 pt-3">
          <Checkbox radius="sm" size="sm" color="warning">
            Black
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            White
          </Checkbox>
          <Checkbox radius="sm" size="sm" color="warning">
            Blue
          </Checkbox>
        </div>
      </div>
    </aside>
  );
}

"use client";

export function Checkbox({ toggle }: any) {
  return <input type="checkbox" onChange={(e) => toggle(e.target.checked)} />;
}

import { Select } from "antd";

const { Option } = Select;

export default function PerPageSelect({
  onSelect,
  maxCount = 40,
  divider = 10,
}) {
  const items = new Array(maxCount / divider)
    .fill(divider)
    .map((_, idx) => idx + 1)
    .map((amount) => amount * divider);

  return (
    <Select defaultValue={items[0]} onChange={onSelect}>
      {items.map((value) => (
        <Option value={value}>{value} / page</Option>
      ))}
    </Select>
  );
}

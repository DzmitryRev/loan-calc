import { OptionsType } from "../types/types";

type SelectPropsType<T> = {
  value: T;
  callback: React.Dispatch<React.SetStateAction<T>>;
  options: OptionsType<T>[];
};

export function Select<T>({ value, callback, options }: SelectPropsType<T>) {
  return (
    <select
      className="select"
      value={String(value)}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        if (Boolean(options.find((item) => String(item.value) === e.target.value))) {
          let newValue: unknown = e.target.value;
          callback(newValue as T);
        }
      }}
    >
      {options.map((option) => (
        <option key={String(option.value)} value={String(option.value)}>
          {option.title}
        </option>
      ))}
    </select>
  );
}

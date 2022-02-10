type InputPropsType = {
  value: string;
  callback(value: string): void;
  placeholder: string;
};

export function Input({ value, callback, placeholder }: InputPropsType) {
  return (
    <input
      className="input"
      type="text"
      pattern="^\d+\.{0,1}\d{0,2}$"
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.validity.valid ? e.target.value : value;
        callback(newValue);
      }}
    />
  );
}

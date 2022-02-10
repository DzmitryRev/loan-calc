type SettingFieldPropsType = {
  title: string;
  component: React.ReactElement;
};

export function SettingField({ title, component }: SettingFieldPropsType) {
  return (
    <div className="field_container">
      <span className="field_title">{title}</span>
      {component}
    </div>
  );
}

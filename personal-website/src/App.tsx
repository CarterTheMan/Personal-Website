interface MenuProps { 
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}
  
function Menu({ title, disabled }: MenuProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1 style={{ color: 'White' }}>Welcome to my app</h1>
      <Menu title="I'm a disabled button" disabled={false}/>
    </div>
  );
}
export default function TabButtons({ children, onSelect, isSelected }) {
  return (
    <li>
      <button onClick={onSelect} className={isSelected ? 'active' : undefined}>
        {children}
      </button>
    </li>
  );
}

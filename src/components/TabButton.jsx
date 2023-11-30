export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

// props.children is a default React props. It just takes the text between the component tag.

export default function Button({ title, css, Icon, size }) {
  return (
    <button
      className={`p-4 rounded-lg font-medium flex items-center justify-center ${css} transition-all hover:shadow-button`}
    >
      <span>{title}</span>
      <Icon size={size} />
    </button>
  );
}

export default function Section({ classes, children }) {
  return <section className={`w-full ${classes}`}>{children}</section>;
}

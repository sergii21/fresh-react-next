export default function PageLayout({ children }) {
  return (
    <div className="pt-[100px] pb-12 px-10 flex justify-center">
      <div className="max-w-screen-lg w-full">{children}</div>
    </div>
  );
}

import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
  const feetching = useIsFetching();
  return (
    <>
      <div id="main-header-loading">{feetching > 0 && <progress />}</div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}

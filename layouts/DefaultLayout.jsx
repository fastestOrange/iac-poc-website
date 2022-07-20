import Header from "../components/Header";

export function DefaultLayout({ children }) {
  return (
    <div className="container">
      <div className="level">
        {/* <div className="level-item has-text-centered">LOGO AND LOGIN</div> */}
        <Header />
      </div>
      <div className="level-item has-text-centered">QUICK LINKS</div>
      <div className="columns">
        <div className="column">
          LEFT HAND
          <br />
          MENU
        </div>
        <div className="column">{children}</div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

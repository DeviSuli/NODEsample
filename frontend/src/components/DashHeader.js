import { Link } from "react-router-dom";

const DashHeader = () => {
  const content = (
    <header className="dash-header">
      <div className="dash-header__constainer">
        <Link to="/dash/notes">
          <h1 className="dash-header__title">TechNotes</h1>
        </Link>
      </div>
    </header>
  );

  return <div>DashHeader</div>;
};

export default DashHeader;

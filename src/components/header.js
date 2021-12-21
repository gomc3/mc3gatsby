import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => (
  <div className="bg-slate-200">
    <div className="mx-auto text-center py-5 px-3">
      <h1 className="m-0">
        <Link to="/" className="text-black text-2xl font-semibold no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;

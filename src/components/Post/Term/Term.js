import React from "react";
import { TermBox } from "./Term.styles";
import { Link } from "gatsby";

const Term = ({ TermCategory, TermTag }) => {
  return (
    <TermBox>
      {TermCategory.length > 0 ? (
        <div className="TermList_Box Category_Box">
          <div className="TitleObject">
            <h4 dangerouslySetInnerHTML={{ __html: "หมวดหมู่:" }} />
          </div>
          <div className="DetailBox">
            <ul className="NavList_Term">
              {TermCategory.map((CategoryList) => (
                <li key={CategoryList.id} className="ListTerm">
                  <Link to={CategoryList.uri} className="ListTermItem">
                    <span
                      dangerouslySetInnerHTML={{ __html: CategoryList.name }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {TermTag.length > 0 ? (
        <div className="TermList_Box Tag_Box">
          <div className="TitleObject">
            <h4 dangerouslySetInnerHTML={{ __html: "แท็ก:" }} />
          </div>
          <div className="DetailBox">
            <ul className="NavList_Term">
              {TermTag.map((TagsList) => (
                <li key={TagsList.id} className="ListTerm">
                  <Link to={TagsList.uri} className="ListTermItem">
                    <span dangerouslySetInnerHTML={{ __html: TagsList.name }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </TermBox>
  );
};

export default Term;

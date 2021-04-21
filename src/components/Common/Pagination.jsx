import React from "react";
import { range } from "lodash";
const Pagination = ({ totalCourse, currentPage, prePage, onPageChange }) => {
  const pageCount = Math.ceil(totalCourse / prePage);
  if (pageCount === 1) return null;
  const pages = range(1, pageCount + 1);
  return (
    
    <div>
      <nav aria-label="Page navigation" className="text-center">
        <ul className="pagination">
          <li>

          </li>
           {pages.map(page => (
                  <li key={page}>
                  <a  style={{cursor:"pointer"}} onClick={()=>onPageChange(page)}>{page}</a>
                </li>
           ))}     

          <li>

          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

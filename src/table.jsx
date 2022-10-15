import fecthAllComments from "./API/getComments";
import { useEffect, useState } from "react";
import { DynamicTable } from "./dynamicTable";

const Table = (props) => {
  const [comments, UpdateComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fecthAllComments().then((data) => {
      setLoading(false);
      UpdateComments(data);
    });
  }, []); 
  return (
    <div>
      {loading && (
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      )}
      {comments.map((item) => (
        <DynamicTable type={props.type} tableData={item} />
      ))}
    </div>
  );
};

export default Table;

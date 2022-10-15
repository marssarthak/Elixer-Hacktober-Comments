import studentData from "./data/studentData";

export const DynamicTable = (props) => {
  let TableData = props.tableData.comments;
  const type = props.type;
  if (type == "cllg") {
    console.log("this is college type")
    TableData = TableData.filter((comment) => {
      let a = false;
      studentData.forEach(item => {
        if (item["Your Github Profile Link"] == comment.user || item["Your Github Profile Link"] == "https://github.com/" +  comment.user ){
          a = true
        }
      })
      return a;
    });
  }
  const column = Object.keys(
    TableData[0] ? TableData[0] : { user: "", message: "", issue_url: "" }
  );
  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };
  // get table row data
  const tdData = () => {
    return TableData.map((data) => {
      return (
        <tr>
          {column.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <div className="mt-40">
      <h2>Repository Name: <a target="_blank" href={"https://www.github.com/ElixirTechCommunity/" +props.tableData.repository } className="repo-name">{props.tableData.repository}</a></h2>
      <hr></hr>
      <table className="table">
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
    </div>
  );
};

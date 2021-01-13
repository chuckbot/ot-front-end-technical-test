import React, { useState, useEffect } from "react";
import "./DataTable.css";
import { DataProps } from "../../helpers/types";

function DataTable(props) {
  const { data } = props;
  const [rows, setRows] = useState(<></>);
  const [expand, setExpand] = useState([]);

  const headers = (
    <tr>
      <th> </th>
      <th>Symbol</th>
      <th>Gene ID</th>
      <th>Gene Name</th>
      <th>Overall Association Score</th>
    </tr>
  );

  const handleExpand = (rowId) => {
    const isExpanded = expand.includes(rowId);

    const newExpanded = isExpanded
      ? expand.filter((id) => id !== rowId)
      : expand.concat(rowId);
    setExpand(newExpanded);
  };

  const renderRow = (item) => {
    const isExpanded = expand.includes(item.id);
    const expandedLabel = isExpanded ? "-" : "+";

    const itemRow = [
      <tr key={item.id}>
        <td className="expand" onClick={() => handleExpand(item.id)}>
          {expandedLabel}
        </td>
        <td>{item.target.gene_info.symbol}</td>
        <td>{item.target.id}</td>
        <td>{item.target.gene_info.name}</td>
        <td>{item.association_score.overall}</td>
      </tr>,
    ];

    if (isExpanded) {
      itemRow.push(
        <tr key={`${item.id}-expanded`}>
          <td colSpan="5">
            <div>This is a test</div>
          </td>
        </tr>
      );
    }

    return itemRow;
  };

  useEffect(() => {
    const sortedData = [...data];
    sortedData.sort(
      (a, b) => b.association_score.overall - a.association_score.overall
    );
    setRows(sortedData.map((item) => renderRow(item)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, expand]);

  return (
    <table>
      <thead>{headers}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

DataTable.propTypes = {
  data: DataProps,
};

export default DataTable;

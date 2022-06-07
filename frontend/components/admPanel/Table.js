import styled from "styled-components";

const Table = ({ tableHead, tableBody, socialMedia, informations }) => {
  return (
    <TableStyled>
      <table>
        <thead>
          <tr>
            {tableHead.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {tableBody.map((item, index) => {
            return (
              <tr key={index}>
                {socialMedia && (
                  <>
                    <td>{item.icon}</td>
                    <td>{item.href}</td>
                  </>
                )}

                {!socialMedia && !informations && (
                  <>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                  </>
                )}

                {informations && (
                  <>
                    <td>{item.data}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                  </>
                )}

                <td className="editBtn">Edit</td>
                <td className="deleteBtn">Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableStyled>
  );
};

const TableStyled = styled.div`
  margin: 40px 0;
  width: 100%;

  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--greenPea);
    color: black;
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    color: #ffffff;
  }
  td {
    background-color: #f2f2f2;
  }
  .editBtn {
    background-color: #0000ff;
    color: #ffffff;
  }
  .deleteBtn {
    background-color: red;
    color: #ffffff;
  }
`;

export default Table;

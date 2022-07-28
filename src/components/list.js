import React from 'react'

function List({datas}) {
    console.log(datas)
  return (
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
                {datas.map((index,data) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.date}</td>
                            <td>{data.amount}</td>
                            <td>{data.payment}</td>
                            <td>{data.remarks}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
  )
}

export default List
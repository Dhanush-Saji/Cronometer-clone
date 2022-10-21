import userEvent from '@testing-library/user-event'
import React from 'react'

function Select({date}) {
    const printNumbers0To5 = () => {
        const row = [];
        for (var i = 1; i <= date; i++) {
          row.push(<option key={i}>{i}</option>);
        }
        return row;
      };
      return (
        <>
          {
            printNumbers0To5()
          }
          </>
      )
}

export default Select
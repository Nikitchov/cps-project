import React, { useEffect, useState } from 'react';
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { heading as importedHeading, body as importedBody } from '../../backend/brands.js';
import { Link } from 'react-router-dom';
import './Table.css';

export default function Table() {
    const [tableHeading, setTableHeading] = useState([]);
    const [tableBody, setTableBody] = useState([]);

    useEffect(() => {
        setTableHeading(importedHeading);
        setTableBody(importedBody);
    }, []);

  return (
    <>
    <div className='table-main'>
        <MuiTable style={{ width: 1056 }} >

                <TableHead className='table-head'>
                    <TableRow>
                        {tableHeading.map((head, headID) => (
                            <TableCell key={headID}>{head}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody className='table-body'>
                    {tableBody.map((rowContent, rowID) => (
                        <TableRow key={rowID}>
                            {rowContent.map((cellContent, cellID) => (
                                <TableCell key={cellID}>{cellContent}</TableCell>
                            ))}
                                                                    
                                                                    <button  className='Button'>Заказать</button>

                        </TableRow>

                    ))}
                </TableBody>
            </MuiTable>
            
    </div>
    <div className='paragraph'>
   <p>
    Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.
</p>
    <Link to='/'  className='read-next'>
    Получить коммерческое предложение
    </Link>
    </div>
    </>
  )
}

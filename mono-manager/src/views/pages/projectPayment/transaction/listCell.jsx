import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import { findCorName, addComma } from 'utils/functions/common';
import { Select as BaseSelect, FormControl, MenuItem } from '@mui/material';

const ListCell = ({ data: row, type, codeList, onUpdateAction, handleCellClick }) => {
    const { t, i18n } = useTranslation();
    const [rowHtml, setRowHtml] = useState('');

    useEffect(() => {
        handlePriceRow(type);
    }, [type, row, codeList]);

    const handleChange = (e) => {
        const formData = new FormData();
        formData.append("seq", e.target.name);
        formData.append("situation", e.target.value);

        onUpdateAction(formData);
    };

    const handlePriceRow = (type) => {
        if (row?.projectPayments && row.projectPayments.length > 0) {
            const html = row.projectPayments.map((item, idx) => (
                <div
                    key={idx}
                    style={{
                        width: '100%',
                        height: '44px',
                        borderBottom: idx === row.projectPayments.length - 1 ? 'none' : '1px solid #dee2e6',
                        textAlign: 'center',
                        lineHeight : type === 'price' ? '22px' : '44px',
                        fontWeight : 'bolder',
                        color : type === 'type' ? '#03A9F4' : 'unset'
                    }}
                     onClick={handleCellClick && (() => handleCellClick(item, row))}
                >
                    {renderCellContent(type, item)}
                </div>
            ));
            setRowHtml(html);
        } else {
            setRowHtml("-");
        }
    };

    const renderCellContent = (type, item) => {
        switch (type) {
            case 'price':
                return (
                    <>
                        {addComma(item.price)}{t('won')} <br /> {item.actualDate}
                    </>
                );
            case 'status':
                return (
                    <>
                        {codeList.length > 0 ? findCorName(item.paymentStatus, i18n.language === 'kr' ? 'codeNm' : 'codeEngNm', codeList) : ''}
                    </>
                );
            case 'type':
                return (
                    <>
                        {codeList.length > 0 ? findCorName(item.paymentType, i18n.language === 'kr' ? 'codeNm' : 'codeEngNm', codeList) : ''}
                    </>
                );
            case 'manage':
                return (
                    <>
                        <FormControl size="medium" sx={{ minWidth: 110 }} >
                            <BaseSelect size="small" variant="outlined"
                                        name={item.seq + ""}
                                        value={item.situation}
                                        onChange={handleChange}>
                                <MenuItem key={0} value={"Y"}>
                                    {i18n.language === 'kr' ? '발행' : 'Publish'}
                                </MenuItem>
                                <MenuItem key={1} value={"N"}>
                                    {i18n.language === 'kr' ? '미발행' : 'UnPublish'}
                                </MenuItem>
                            </BaseSelect>
                        </FormControl>
                    </>
                );
            default:
                return '-';
        }
    };

    return (
        <div className="dataTable-custom-cell" style={{ width: '100%', textAlign: 'center'}}>
            {rowHtml}
        </div>
    );

};

export default ListCell;

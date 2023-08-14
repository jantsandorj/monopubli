import React, { useContext } from 'react';
import { styled } from '@mui/system';
import SubCard from 'components/cards/SubCard';
import { Grid } from '@mui/material';
import ObjectUtil from 'utils/ObjectUtil';
import { ListContextWrapper } from './ListContextWrapper';

const BaseFilter = styled(SubCard)({
    paddingLeft: 16,
    paddingRight: 16
});

const Filter = ({ ...props }) => {
    const { setSearchCondition, searchCondition } = useContext(ListContextWrapper);
    const onSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData(event.target);
        let newJson = JSON.stringify(ObjectUtil.formDataToJson(formdata)).replaceAll('All', '');
        setSearchCondition({ ...searchCondition, ...JSON.parse(newJson) });
    };

    return (
        <BaseFilter {...props}>
            <form onSubmit={onSubmit}>
                <Grid container columnSpacing={{ md: 2 }}>
                    {props.children}
                </Grid>
            </form>
        </BaseFilter>
    );
};
export default Filter;

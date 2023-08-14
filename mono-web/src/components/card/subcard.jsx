import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { Card, CardContent } from '@mui/material';

// Style 
import { CardStyle } from "./style";

// ==============================|| CUSTOM SUB CARD ||============================== //

const Subcard = forwardRef(({ children, content, contentClass, ...others }, ref) => {

    return (
        <Card
            ref={ref}
            {...others}
        >
            {/* card content */}
            {content && (
                <CardContent sx={CardStyle.sub_card_content}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    );
});

Subcard.propTypes = {
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    contentSX: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

Subcard.defaultProps = {
    content: true
};

export default Subcard;

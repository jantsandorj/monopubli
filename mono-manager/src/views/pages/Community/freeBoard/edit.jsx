// REACT
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

// MUI
import { Paper, Box } from '@mui/material';

// COMPONENTS
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';
import Loader from 'components/Loader';

// OTHER
import { useUpdateFreeBoardMutation, useGetFreeBoardDetailsQuery, useDeleteFreeBoardMutation } from 'api/community/FreeBoardApi';
import FreeBoardForm from './form';

//PAGE
const FreeBoardCreatePage = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetFreeBoardDetailsQuery(code);

    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Box variant="body2" component={Paper}>
                {isLoading && <Loader />}
                <FreeBoardForm
                    data={data}
                    isLoading={isLoading}
                    mutation={useUpdateFreeBoardMutation}
                    code={code}
                    deleteMutation={useDeleteFreeBoardMutation}
                />
            </Box>
        </MainCard>
    );
};

export default FreeBoardCreatePage;

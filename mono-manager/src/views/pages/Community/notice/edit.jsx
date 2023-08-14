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
import { useUpdateNoticeBoardMutation, useGetNoticeBoardDetailsQuery, useDeleteNoticeBoardMutation } from 'api/community/NoticeBoardApi';
import NoticeBoardForm from './form';

//PAGE
const NoticeBoardCreatePage = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetNoticeBoardDetailsQuery(code);

    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Box variant="body2" component={Paper}>
                {isLoading && <Loader />}
                <NoticeBoardForm
                    data={data}
                    isLoading={isLoading}
                    mutation={useUpdateNoticeBoardMutation}
                    code={code}
                    deleteMutation={useDeleteNoticeBoardMutation}
                />
            </Box>
        </MainCard>
    );
};

export default NoticeBoardCreatePage;

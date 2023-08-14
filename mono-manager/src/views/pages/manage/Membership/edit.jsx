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
import { useUpdateMembershipMutation, useGetMembershipDetailsQuery, useDeleteMembershipMutation } from 'api/manage/membership';
import MembershipForm from './form';

//PAGE
const MembershipCreatePage = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetMembershipDetailsQuery(code);

    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Box variant="body2" component={Paper}>
                {isLoading && <Loader />}
                <MembershipForm
                    data={data}
                    loading={isLoading}
                    mutation={useUpdateMembershipMutation}
                    code={code}
                    deleteMutation={useDeleteMembershipMutation}
                />
            </Box>
        </MainCard>
    );
};

export default MembershipCreatePage;

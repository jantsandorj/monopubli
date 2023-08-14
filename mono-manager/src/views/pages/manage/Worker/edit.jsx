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
import { useGetWorkerQuery, useUpdateWorkerMutation } from 'api/worker';
import WorkerForm from './form';

//PAGE
const WorkerEditPage = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const { data, isLoading } = useGetWorkerQuery(code);

    return (
        <MainCard title={<BackButton text={t('act_modify')} />}>
            <Box variant="body2" component={Paper}>
                {isLoading && <Loader />}
                <WorkerForm data={data} isLoading={isLoading} mutation={useUpdateWorkerMutation} code={code} />
            </Box>
        </MainCard>
    );
};

export default WorkerEditPage;

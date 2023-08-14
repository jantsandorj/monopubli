// REACT
import { useTranslation } from 'react-i18next';

// FORM
import { useCreateWorkerMutation } from 'api/worker';

// COMPONENTS
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';

// OTHER
import WorkerForm from './form';
import { Container } from '@mui/material';

//PAGE
const WorkerCreatePage = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <MainCard title={<BackButton text={t('act_create')} />}>
                <WorkerForm mutation={useCreateWorkerMutation} />
            </MainCard>
        </Container>
    );
};

export default WorkerCreatePage;

// REACT
import { useTranslation } from 'react-i18next';

// COMPONENTS
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';

// OTHER
import { useCreateFreeBoardMutation } from 'api/community/FreeBoardApi';
import FreeBoardForm from './form';

//PAGE
const FreeBoardCreatePage = () => {
    const { t } = useTranslation();

    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <FreeBoardForm mutation={useCreateFreeBoardMutation} />
        </MainCard>
    );
};

export default FreeBoardCreatePage;

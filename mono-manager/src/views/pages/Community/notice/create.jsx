// REACT
import { useTranslation } from 'react-i18next';

// COMPONENTS
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';

// OTHER
import { useCreateNoticeBoardMutation } from 'api/community/NoticeBoardApi';
import NoticeBoardForm from './form';

//PAGE
const NoticeBoardCreatePage = () => {
    const { t } = useTranslation();

    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <NoticeBoardForm mutation={useCreateNoticeBoardMutation} />
        </MainCard>
    );
};

export default NoticeBoardCreatePage;

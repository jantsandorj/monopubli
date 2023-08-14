// REACT
import { useTranslation } from 'react-i18next';

// COMPONENTS
import MainCard from 'components/cards/MainCard';
import { BackButton } from 'components/button/BackButton';

// OTHER
import { useCreateMembershipMutation } from 'api/manage/membership';
import MembershipForm from './form';

//PAGE
const MembershipCreatePage = () => {
    const { t } = useTranslation();

    return (
        <MainCard title={<BackButton text={t('act_create')} />}>
            <MembershipForm mutation={useCreateMembershipMutation} />
        </MainCard>
    );
};

export default MembershipCreatePage;

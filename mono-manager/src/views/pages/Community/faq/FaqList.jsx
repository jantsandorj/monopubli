import MainCard from 'components/cards/MainCard';
import { List } from 'components';
import FaqListTable from './FaqListTable';
import { useTranslation } from 'react-i18next';

const FaqList = () => {
    const { t } = useTranslation();
    return (
        <MainCard title={t('menu_community_faq')}>
            <List>
                <FaqListTable />
            </List>
        </MainCard>
    );
};

export default FaqList;

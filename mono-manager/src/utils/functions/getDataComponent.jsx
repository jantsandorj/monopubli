import { useEffect } from 'react';

const GetDataComponent = ({ mutation, setLoading, setData, code }) => {
    const { data, isLoading } = mutation(code);
    useEffect(() => {
        setLoading(isLoading);
        setLoading();
        if (data) {
            setData(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return <></>;
};

export default GetDataComponent;

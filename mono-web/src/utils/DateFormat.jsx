import moment from "moment/moment"

const useDate = () => {

    const getDate = (dateNow) => {
        return dateNow ? moment(new Date(dateNow)).format("YYYY-MM-DD") : moment(new Date()).format("YYYY-MM-DD")
    }
    return { getDate }
}
export default useDate
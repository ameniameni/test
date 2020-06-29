import { GET_REPORTS_URL } from '../../constants';

export const getOwnReports = async (token, params) =>{
    const query = `?userId=${params.userId}&date=${params.date}`;
    await fetch({
        url: GET_REPORTS_URL + query,
        headers: {
            Authorization: 'bearer ' + token,
        },       
    })
};
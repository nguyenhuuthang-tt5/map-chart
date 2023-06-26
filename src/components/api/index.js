import axios from "axios";

export const getCountries = () => axios.get('https://api.covid19api.com/countries');
//
export const getReportByCountryId = (Slug) => axios.get(`https://api.covid19api.com/dayone/country/${Slug}`)
import CountrySelector from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";
import { getCountries, getReportByCountryId } from "./components/api";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);
  //
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data)
      setSelectedCountryId('vn')
    });
  }, [])
  //
  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value)
  }
  //
  useEffect(() => {
    if(selectedCountryId) {
      const { Slug } = countries.find((country) => country.ISO2.toLowerCase() === selectedCountryId);
      //
      getReportByCountryId(Slug).then((res) => {
        res.data.pop();
        setReport(res.data)
      });
    }
  }, [countries, selectedCountryId])
  return (
    <div className="App">
      <CountrySelector countries={countries} handleOnchange={handleOnchange} value={selectedCountryId}/>
      <HighLight report={report}/>
      <Summary report={report} selectedCountryId={selectedCountryId}/>
    </div>
  );
}

export default App;

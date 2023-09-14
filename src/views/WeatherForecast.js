import '../views/Table.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherForecast = () => {

  const [DataTmp, setDataTmp] = useState([]);
  const [DataTmp2, setDataTmp2] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [isError, setIsErr] = useState(false);

  async function fetchData() {
    try{
      let response = await axios('https://api.openweathermap.org/data/2.5/weather?id=1566083&appid=idTokenHere');
      let response2 = await axios('https://api.openweathermap.org/data/2.5/weather?id=1581130&appid=idTokenHere');
      let data = response && response.data ? response.data: [];
      let data2 = response2 && response2.data ? response2.data: [];
      console.log(response.data);
      setDataTmp(data);
      setDataTmp2(data2);

      setLoading(false);
      setIsErr(false);
    }
    catch(e){
      setLoading(false);
      setIsErr(true);
    }
  }

  useEffect(() => {
      setTimeout(async () => {
        fetchData();
      }, 2000);
  }, []);
  return(
    <table>
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature (K)</td>
            <td>Humid</td>
            <td>Wind speed</td>
          </tr>
        </thead>
        <tbody>
            {(isError === false && Loading === false)
              &&
              <tr key ={DataTmp.id}>
                  <td>{DataTmp.name}</td>
                  <td>{DataTmp?.main?.temp_max}</td>
                  <td>{DataTmp?.main?.humidity}</td>
                  <td>{DataTmp?.wind?.speed}</td>
              </tr>
            }
            {(isError === false && Loading === false) &&
            <tr key ={DataTmp2.id}>
                  <td>{DataTmp2.name}</td>
                  <td>{DataTmp2?.main?.temp_max}</td>
                  <td>{DataTmp2?.main?.humidity}</td>
                  <td>{DataTmp2?.wind?.speed}</td>
            </tr>
            }
            {(Loading === true) &&
              <tr>
                <td  colSpan = '5' style ={{textAlign: 'center'}}>
                  Loading...
                </td>
              </tr>
            }
            {(isError === true) &&
              <tr>
                <td  colSpan = '5' style ={{textAlign: 'center'}}>
                  Something's wrong !
                </td>
              </tr>
            }
        </tbody>
    </table>
  )
}
export default WeatherForecast;

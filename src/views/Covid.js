import '../views/Table.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Covid = () => {

  const [DataTmp, setDataTmp] = useState([]);
  const [Loading, setLoading] = useState(true);
  async function fetchData() {
    let response = await axios('https://api.openweathermap.org/data/2.5/weather?id=1566083&appid=ad0e1f9d4eed22b12cd1ced1ac97a2d5');
    let data = response && response.data ? response.data: [];
    console.log(response.data);
    setDataTmp(data);
    setLoading(false);
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
            {(Loading === false) &&
              <tr key ={DataTmp.id}>
                  <td>{DataTmp.name}</td>
                  <td>{DataTmp?.main?.temp_max}</td>
                  <td>{DataTmp?.main?.humidity}</td>
                  <td>{DataTmp?.wind?.speed}</td>
              </tr>
            }
            {
              (Loading === true) &&
              <tr>
                <td  colspan = '5' style ={{textAlign: 'center'}}>
                  Loading...
                </td>
              </tr>
            }
          </tbody>
        </table>
    )
}
export default Covid;
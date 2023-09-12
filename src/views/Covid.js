import '../views/Table.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Covid = () => {

  const [DataTmp, setDataTmp] = useState([]);
    async function fetchData() {
        let response = await axios('https://api.openweathermap.org/data/2.5/weather?id=1566083&appid=ad0e1f9d4eed22b12cd1ced1ac97a2d5');
        let data = response && response.data ? response.data: [];
        console.log(response.data);
        setDataTmp(data);
      }

    useEffect(() => {
        fetchData(); 
    }, []);
    
    return(
        <table>
          <thead>
            <tr>
              <td>City</td>
              <td>Temperature</td>
              <td>Humid</td>
              <td>Weather</td>
            </tr>
          </thead>
          <tbody>
            <tr key ={DataTmp.id}>
                  <td>{DataTmp.name}</td>
                  <td>{DataTmp.main.temp_max - 273}</td>
                  <td>{DataTmp.main.humidity}</td>
                  <td>{DataTmp.weather[0].description}</td>
                </tr>
          </tbody>
        </table>
    )
}

export default Covid;
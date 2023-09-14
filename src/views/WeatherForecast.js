import '../views/Table.scss'
import useFetch from '../customize/Fetch.js'

const WeatherForecast = () => {
  const {dataTmp: DataWeather, isError, isLoading} = useFetch('https://api.openweathermap.org/data/2.5/weather?id=1566083&appid=ad0e1f9d4eed22b12cd1ced1ac97a2d5');
  // let DataWeather = useFetch(url).data;
  // let isError = useFetch(url).isError;
  // let isLoading = useFetch(url).isLoading;
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
            {(isError === false && isLoading === false)
              &&
              <tr key ={DataWeather.id}>
                  <td>{DataWeather.name}</td>
                  <td>{DataWeather?.main?.temp_max}</td>
                  <td>{DataWeather?.main?.humidity}</td>
                  <td>{DataWeather?.wind?.speed}</td>
              </tr>
            }
            {(isLoading === true) &&
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
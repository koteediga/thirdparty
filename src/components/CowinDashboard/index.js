import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

class CowinDashboard extends Component {
  state = {
    initialdata: {},
  }

  componentDidMount() {
    this.onChange()
  }

  onChange = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const options = {
      methods: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    this.setState({
      initialdata: data,
    })
  }

  render() {
    const {initialdata} = this.state

    const {
      last_7_days_vaccination = [],
      vaccination_by_age,
      vaccination_by_gender,
    } = initialdata

    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
        />
        <h1>CoWIN Vaccination in India</h1>
        <div>
          <VaccinationCoverage source={last_7_days_vaccination} />
          <VaccinationByGender data={vaccination_by_gender} />
        </div>
      </>
    )
  }
}
export default CowinDashboard

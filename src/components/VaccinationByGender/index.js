import ReactSvgPieChart from 'react-svg-piechart'
import React from 'react'

const VaccinationByGender = props => {
  const {data} = props
    const formattedData = data
    ? data.map((item) => ({
        title: item.gender, // assuming gender field is in the data
        value: item.count,  // assuming count field is in the data
        color: item.color,  // you can either pass the color or assign it dynamically
      }))
    : [];
  return (
    <>
      <h1>Vaccination by gender</h1>
      <ReactSvgPieChart
        data={data}
        // If you need expand on hover (or touch) effect
        expandOnHover
        // If you need custom behavior when sector is hovered (or touched)
        onSectorHover={(d, i, e) => {
          if (d) {
            console.log('Mouse enter - Index:', i, 'Data:', d, 'Event:', e)
          } else {
            console.log('Mouse leave - Index:', i, 'Event:', e)
          }
        }}
      />
    </>
  )
}

export default VaccinationByGender

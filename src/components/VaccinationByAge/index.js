import React from 'react'
import ReactSvgPieChart from 'react-svg-piechart'

const VaccinationByAge = props => {
  const {data} = props
  return (
    <>
      <h1>Vaccination by Age</h1>
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

export default VaccinationByAge

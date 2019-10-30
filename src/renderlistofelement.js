import React from "react"
import PropTypes from "prop-types"
import { API_link } from './APIlink'
import { Link } from "react-router-dom"
import { useFetch } from './hookusefetch'
import "./index.css"

export const RenderListOfElement = props => {
  
  let url = props.fetchUrl

  const [tvShowList, isLoading] = useFetch(url)


  return isLoading ? (
    "lading"
  ) : (
      <>
        <ul>
          {tvShowList.results.map(({ original_name, id }) => (
            <li key={id}>
              <Link to={`/info/${id}`}>{original_name}</Link>
            </li>
          ))}
        </ul>
      </>
    )
}

RenderListOfElement.propTypes = {
  fetchUrl: PropTypes.string.isRequired
};

RenderListOfElement.defaultProps = {
  fetchUrl: `${API_link.URL}/popular?api_key=${API_link.KEY}`
};

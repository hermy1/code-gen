import React from 'react'
import { useParams } from 'react-router-dom'
type Params = {
    pageNumber: string;
}
function Profile() {
const params = useParams<Params>();
const pageNumber = params.pageNumber ? params.pageNumber : '';
  return (
    <div>
        <h1>Profile page</h1>
        <p>Page number: {pageNumber}</p>
    </div>
  )
}

export default Profile
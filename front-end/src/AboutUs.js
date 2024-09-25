import axios from 'axios'
import { useEffect, useState } from 'react'

const AboutUs = () => {
  const [data, setData] = useState({ paragraphs: [], picture: '' })

  useEffect(() => {
    axios
      .get('http://localhost:5002/about-us')
      .then(response => setData(response.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <div>
        <h1>About Me</h1>
        {data.paragraphs.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        <img src={data.picture} alt="my_picture" />
      </div>
    </>
  )
}

export default AboutUs

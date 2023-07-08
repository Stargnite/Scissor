import { useState } from "react"
import LoadingGif from './../../assets/loadingGIF.gif'
import classes from './analytics.module.css'

const Analytics = () => {
	const [loading, setLoading] = useState(true)
  return (
	<div >
	  {loading && <img src={LoadingGif}  className={classes.loading}/>}
	</div>
  )
}

export default Analytics

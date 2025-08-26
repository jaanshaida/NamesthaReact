import {CDN_URL} from "../Utils/Constants"

const RestaurantCard = (data) => {
    const {name, cuisines, avgRating,cloudinaryImageId, costForTwo, sla} = data.restData
    return (
        <div className="res-card" style={{
    backgroundColor: "#f0f0f0",
    
}}> 
            <img 
                className='res-logo'
                alt="res-logo" 
                src={ CDN_URL + cloudinaryImageId}/>
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo + ",  " + avgRating + " start Rating"}</h5>
            <h5>{sla.slaString + "delivery"}</h5>
        </div>
    )

}

export default RestaurantCard
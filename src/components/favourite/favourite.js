import { useEffect, useState } from "react"
import { FavouriteService } from "../../service/favourite-service"
import './favourite.scss'
import { Link } from "react-router-dom"
const Favourite = () => {
    const [favourites, setFavourites] = useState([])
    const loadMyFavourite = () => {
        FavouriteService.getMyFavourite().then(res => {
            setFavourites(res);
        })
    }
    const removeFavourite = (e, id) => {
        FavouriteService.removeFavourite(id).then(res => {
            loadMyFavourite();
        })
    }
    useEffect(() => {
        loadMyFavourite();
    }, [])
    return <>
        <div class="card-body px-0 pb-2">
            {favourites.map(f => {
                return <>
                    <div className="favourite col-6 offset-3">
                        <div className="info">
                            <p className=" font-weight-bold mb-0">
                                <Link to={"/properties/" + f.property.id}>{f.property?.address?.line1} </Link>
                            </p>
                            <p className="text-secondary mb-0">
                                {f.property.propertyType}
                            </p>
                        </div>
                        <div className="action">
                            <button onClick={(e) => { removeFavourite(e, f.id) }} className="btn btn-danger"><i className="bi bi-trash3-fill danger"></i></button>
                        </div>

                    </div>

                </>
            })}
        </div>
    </>
}

export default Favourite
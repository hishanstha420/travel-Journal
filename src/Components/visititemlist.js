import locationlogo from "../images/Fill 219.svg"
import "../css/visitcard.css"
export default function VisitCard(props)
{
    return(
        <div className="parent-visit-item">
            <div className="visit-item">
                <img src ={props.items.img} className="img" alt="{props.items.img}" height="235px" width="180px"/>
               <div className="contents">
                <section className="Informations">
                <img 
                src={locationlogo } className="locationlogo"
                alt="Location-logo"
                />
                 <span 
                 className="visit-item-country">{props.items.country}</span>
                <a 
                href={props.items.placeLink} className="maps">
                    <span>View on Google Maps</span>
                </a>
                </section>
                <span className="visit-item-title">{props.items.title}</span>
                <section className="tour-data">
                <span className="Date"><b>{props.items.duration.startDate}-{props.items.duration.endDate}</b></span>
                <span className="visit-item-description">{props.items.description}</span> 
                </section>       
                </div>
            </div>
            <hr className="line"/>
        </div>
    )
}
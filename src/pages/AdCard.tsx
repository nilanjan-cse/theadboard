import React from 'react'
import { AdvStyle, PostStyle } from '../ReactStyles/AppStyles'
import Image from 'next/image'

export interface IAdCard {
    key:number,
    imageSrc:string,
    title:string,
    content:string,
}
function AdCard(props:IAdCard) {
    const {imageSrc, title, content} = props;
    return (
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Image src={imageSrc}
                        className="img-fluid rounded-start" style={AdvStyle} width={500} height={100} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={PostStyle}>{content}</p>
                        <a href="#" className="btn btn-primary">Read more</a>
                        <p className="card-text mt-2"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdCard
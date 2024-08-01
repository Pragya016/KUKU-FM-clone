import React from 'react';

export default function Carousel() {

    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2000"
                style={{ width: '95%', margin: 'auto', height: '300px' }}
            >
                <div className="carousel-inner" style={{ height: '100%' }}>
                    <div className="carousel-item active">
                        <img
                            src="https://images.cdn.kukufm.com/w:720/f:webp/q:85/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/a4e9beefaaa240bd8cc10d15ee0b3784_landscape_238.png"
                            className="d-block w-100"
                            alt="..."
                            style={{ width: '100%', height: '300px', objectFit: 'fill' }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.cdn.kukufm.com/w:720/f:webp/q:85/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/e064ec58c2974f1e90e59b252a57946a_landscape_220.jpg"
                            className="d-block w-100"
                            alt="..."
                            style={{ width: '100%', height: '300px', objectFit: 'fill' }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.cdn.kukufm.com/w:720/f:webp/q:85/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/845e0f32dae64cc384702c127082d271_landscape_183.png"
                            className="d-block w-100"
                            alt="..."
                            style={{ width: '100%', height: '300px', objectFit: 'fill' }}
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

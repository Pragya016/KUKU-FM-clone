import React, { useEffect } from 'react';

export default function Carousel() {
    useEffect(() => {
        const handleSlide = () => {
            // Your custom slide handling logic if needed
        };

        const carousel = document.getElementById('carouselExampleControls');
        if (carousel) {
            carousel.addEventListener('slide.bs.carousel', handleSlide);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (carousel) {
                carousel.removeEventListener('slide.bs.carousel', handleSlide);
            }
        };
    }, []);

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
                            src="https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/6052327924ce40a78897a849a85bdaa3.png"
                            className="d-block w-100"
                            alt="..."
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/6052327924ce40a78897a849a85bdaa3.png"
                            className="d-block w-100"
                            alt="..."
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/6052327924ce40a78897a849a85bdaa3.png"
                            className="d-block w-100"
                            alt="..."
                            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
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

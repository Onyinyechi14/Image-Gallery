import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './imageGallery.css'

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=MofLeuJ9-xyG62PpYyD9nEdffSJFsuuQTuLvC9_IuzE`);
            setImages((prevImages) => [...prevImages, ...response.data]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching imgages, error');
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchImages();
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        <div className ="image-gallery">
            {images.map((image) => (
                <img key={image.id} src={image.urls.small} alt={image.alt_description} />
            ))}
            {loading && <p>Loading...</p>}
        </div>
    );

};
export default ImageGallery
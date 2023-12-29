import { useState, useEffect } from 'react';

import handguns from '../../data/dictionaries/handguns.json';
import rifles from '../../data/dictionaries/rifles.json';
import attachments from '../../data/dictionaries/attachments.json';

export default function useProducts(category) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        switch (category) {
            case "handguns":
                setProducts(handguns);
                break;
            case "rifles":
                setProducts(rifles);
                break;
            case "attachments":
                setProducts(attachments);
                break;
        }
    }, []);
    return products;
}
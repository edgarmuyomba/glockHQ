import { useState, useEffect } from "react";

import handguns from '../../data/dictionaries/handguns.json';
import rifles from '../../data/dictionaries/rifles.json';
import attachments from '../../data/dictionaries/attachments.json';

export default function useImages(role) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);

    useEffect(() => {
        if (role === 'bestsellers') {
            // bestsellers
            let bestSellers = [];

            for (let i = 0; i < 3; i++) {
                // get the guns
                let index = random(9, 0);
                while (bestSellers.includes(handguns[index])) index = random(9, 0);
                if (handguns[index] !== undefined) bestSellers.push(handguns[index]);
            }

            for (let i = 0; i < 3; i++) {
                // get the rifles
                let index = random(33, 0);
                while (bestSellers.includes(rifles[index])) index = random(33, 0);
                if (rifles[index] !== undefined) bestSellers.push(rifles[index]);
            }

            for (let i = 0; i < 1; i++) {
                // get the attachments
                let index = random(18, 0);
                while (bestSellers.includes(attachments[index])) index = random(18, 0);
                if (attachments[index] !== undefined) bestSellers.push(attachments[index]);
            }


            setImages(bestSellers);
            setLoading(false);
        } else if (role === 'highlights') {
            // highlights
            let highlights = [];

            for (let i = 0; i < 1; i++) {
                // get the guns
                let index = random(9, 0);
                while (highlights.includes(handguns[index])) index = random(9, 0);
                if (handguns[index] !== undefined) highlights.push(handguns[index]);
            }

            for (let i = 0; i < 1; i++) {
                // get the rifles
                let index = random(33, 0);
                while (highlights.includes(rifles[index])) index = random(33, 0);
                if (rifles[index] !== undefined) highlights.push(rifles[index]);
            }

            for (let i = 0; i < 1; i++) {
                // get the attachments
                let index = random(18, 0);
                while (highlights.includes(attachments[index])) index = random(18, 0);
                if (attachments[index] !== undefined) highlights.push(attachments[index]);
            }


            setImages(highlights);
            setLoading(false);
        } else {
            // error
            setError('Only bestseller and highlights available');
        }
    }, []);
    return { images, loading, error };
}
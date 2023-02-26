import { useEffect, useState } from "react";
import getApi from "../lib/api"
import styles from '../styles/result.module.css'
// import Image from 'next/image'

// export default function Beer() {
const Beer = () => {
    const [beer, setBeer] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null);

    useEffect(() => {
        fetch(getApi)
            .then((response) => response.json())
            .then((data) => {
                setBeer(data);
            });
    }, []);


    const getBeerDetails = (id) => {
        fetch(`${getApi}${id}`)
            .then((response) => response.json())
            .then((data) => {
                setSelectedBeer(data[0]);
            });
    };

    return (
        <div className={styles.flex}>
            <div className={styles.cen}>
                {beer.map((beer) => (
                    <div key={beer.id}>
                        <h3>{beer.name}</h3>
                        <button onClick={() => getBeerDetails(beer.id)}>詳細</button>
                    </div>
                ))}
            </div>
            {selectedBeer && (
                <div className={styles.result}>
                    <h3>{selectedBeer.name}</h3>
                    <p>{selectedBeer.tagline}</p>
                    <p>{selectedBeer.description}</p>
                    <ul>
                        <li>Malt:</li>
                        {selectedBeer.ingredients.malt.map((malt) => (
                            <li key={malt.name}>
                                {malt.name}: {malt.amount.value} {malt.amount.unit}
                            </li>
                        ))}
                        <li>Hops:</li>
                        {selectedBeer.ingredients.hops.map((hops) => (
                            <li key={hops.name}>
                                {hops.name}: {hops.amount.value} {hops.amount.unit}
                            </li>
                        ))}
                        <p><a href={selectedBeer.image_url}>写真のURL</a></p>
                    </ul>
                    {/* <Image
                        // src={selectedBeer.image_url}
                        alt=""
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        width={800}
                        height={100}
                    /> */}
                </div>
            )
            }
        </div >
    );
}

export default Beer
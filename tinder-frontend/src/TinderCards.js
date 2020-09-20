import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';

import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        // {
        //     name: 'Steve Jobs',
        //     url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        // },
        // {
        //     name: 'Elon Musk',
        //     url: 'https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg'
        // }
    ]);

    // Piece of code which runs based on a condition
    useEffect(() => {
        // effect
        
        const  unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            unsubscribe();
        }

    }, []);//people: This is where the watcher is added, e.g. if people is added to watcher then when ever people variable change, the code executes.

    return (
        <div>
            <div className="tinderCards_cardContainer">
                {people.map(person => (
                    <TinderCard 
                    className="swipe" 
                    key="{pearson.name}"
                    preventSwipe={['up', 'down']}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }} 
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards

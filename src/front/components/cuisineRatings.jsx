import React, {useState} from 'react'

export default function CuisineRatings(setDisplay, cuisinePrefences, setCuisinePrefences) {
    const handleUserPreferences = () => {
        setDisplay("verifying")
      }

    const cuisines = [ //aligns with api
        { type: "American", img: "https://images.unsplash.com/photo-1561043433-9265f73e685f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtZXJpY2FuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" },
        { type: "Asian", img: "https://images.unsplash.com/photo-1622643944007-450264a5f9a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBmb29kfGVufDB8fDB8fHww" },
        { type: "British", img: "https://plus.unsplash.com/premium_photo-1695758774479-faae1180b078?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpdGlzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" },
        { type: "Carribean", img: "https://plus.unsplash.com/premium_photo-1695055513584-e79902a77962?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FycmliZWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" },
        { type: "Centeral Europian", img: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Nobml0emVsfGVufDB8fDB8fHww" },
        { type: "Chinese", img: "https://images.unsplash.com/photo-1658863173663-607c0feef366?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { type: "Eastern European", img: "https://images.unsplash.com/photo-1713168707707-c0a11bcc37aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qm9yc2NodHxlbnwwfHwwfHx8MA%3D%3D" },
        { type: "French", img: "https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" },
        { type: "Greek", img: "https://plus.unsplash.com/premium_photo-1674106347866-8282d8c19f84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWslMjBmb29kfGVufDB8fDB8fHww" },
        { type: "Indian", img: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { type: "Italian", img: "https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { type: "Japanese", img: "https://images.unsplash.com/photo-1569912815867-5580004c13a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fHww" },
        { type: "Korean", img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { type: "Kosher", img: "https://plus.unsplash.com/premium_photo-1663853051888-5ced57f3a3d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { type: "Mediterranean", img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { type: "Middle Eastern", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlkZGxlJTIwZWFzdGVybiUyMGZvb2R8ZW58MHx8MHx8fDA%3D" },
        { type: "Nordic", img: "https://plus.unsplash.com/premium_photo-1666663151011-969529914004?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5vcmRpYyUyMGZvb2R8ZW58MHx8MHx8fDA%3D" },
        { type: "South American", img: "https://plus.unsplash.com/premium_photo-1668618295141-68d726813100?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { type: "South Eastern Asia", img: "https://plus.unsplash.com/premium_photo-1723575734758-97e6e862a670?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]
    
    const handleRating = (cuisineType, rating) => {
        setCuisinePrefences(prev => ({
            ...prev,
            [cuisineType]: rating
        }));
    };

    const ratingOptions = [
        {
            title: "Among the favs",
            iconClass: "fa-solid fa-heart",
            color: "#ffd43b", // gold
            value: 5
        },
        {
            title: "Ohh I love this",
            iconClass: "fa-solid fa-heart",
            color: "red",
            value: 4
        },
        {
            title: "Neutral / Never tried",
            iconClass: "fa-solid fa-face-meh-blank",
            color: "#666",
            value: 3
        },
        {
            title: "Not my favorite",
            iconClass: "fa-regular fa-face-meh",
            color: "#999",
            value: 2
        },
        {
            title: "I'll pass",
            iconClass: "fa-regular fa-face-frown",
            color: "#999",
            value: 1
        }
    ];

    return (
        <div className='w-75 d-flex flex-wrap mx-auto'>
            {cuisines.map((cuisine, index) => (
                <div className="card m-2" style={{ width: "18rem" }} key={index}>
                    <img src={cuisine.img} className="card-img-top" height="200vh" width="100%" alt={cuisine.type} />
                    <div className="card-body mx-auto">
                        <h5 className="card-title">{cuisine.type}</h5>
                        <div className='btn-group'>
                            {ratingOptions.map((option, i) => {
                                const isSelected = cuisinePrefences[cuisine.type] === option.value;
                                return (
                                    <button
                                        key={i}
                                        title={option.title}
                                        className={`btn ${isSelected ? 'btn-info' : 'btn-outline-secondary'}`}
                                        onClick={() => handleRating(cuisine.type, option.value)}
                                    >
                                        <i
                                            className={option.iconClass}
                                            style={{
                                                color: isSelected ? option.color : undefined
                                            }}
                                        ></i>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
      <button onClick={() => handleUserPreferences()} className="btn btn-info">Continue</button>
    </div>
    );
}

//Aggregate with average
db.movie.aggregate(
    [
        {$match: {}},
        {$group: {_id:"$genre", avg_star_rating:{$avg:"$star_rating"}}}

    ]
);

//Aggregate with count
db.movie.aggregate(
    [
        {$match: {genre:{$in:["Drama","Comedy"]}}},
        {$group: {_id:"$genre", count:{$sum:1}}},
        {$sort: {count:-1}}

    ]
);

db.movie.count({})


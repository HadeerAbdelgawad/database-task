const mongodb= require("mongodb")

const mongoClient= mongodb.MongoClient
const connectionUrl= 'mongodb://127.0.0.1:27017'
const dbname= 'Task-1'
mongoClient.connect(connectionUrl,(error,res1)=>{
    if(error){
        console.log("Error Occured")
    }
    console.log("All Perfect")

    const db=res1.db(dbname)

    ////////////////////////////////////////////////////////////////////////////////

    db.collection('users').insertOne({
        name:'Hadeer',
        age:20
    },
    (error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })

    ////////////////////////////////////////////////////////////////////
    db.collection('users').insertOne(
    {
        name:'Hams',
        age:21
    },(error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })

    // ///////////////////////////////////////////////////////////////

    db.collection('users').insertMany(
        [{
            name:'aya',
            age:20
        },
        {
            name:'Nour',
            age:19
        },
        {
            name:'Bassant',
            age:18
        },
        {
            name:'Mohamed',
            age:23
        },
        {
            name:'Ahmed',
            age:24
        },
        {
            name:'Islam',
            age:27
        },
        {
            name:'Hamed',
            age:27
        },
        {
            name:'Norhan',
            age:27
        },
        {
            name:'Salam',
            age:27
        },
        {
            name:'Walled',
            age:27
        }
    ],(error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedCount)
    })

    //////////////////////////////////////////////////////////////////////////

    db.collection('users').find({age:27}).toArray((error,users)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(users)
    })

    ////////////////////////////////////////////////////////////////////////////

    db.collection('users').find({age:27}).limit(3).toArray((error,users)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(users)
    })

    ///////////////////////////////////////////////////////////////////////////

   
    db.collection('users').find({}).limit(4).toArray((error,users)=>{
        if(error){
                    console.log("Unable to insert data")
                }
                console.log(users)
                const ids = users.map(user => user._id);

                updateName(ids);
    })

    function updateName(ids){
        db.collection('users').updateMany(
            { _id: { $in: ids}},
           { $set:{name:"Mike"}}
        )
        .then((data1)=>{
            console.log(data1.modifiedCount)
        }).catch((error)=>{
            console.log(error)
        })
        
    }
    ////////////////////////////////////////////////////////////////////////////////

    db.collection('users').find({age:27}).limit(4).toArray((error,users)=>{
        if(error){
                    console.log("Unable to insert data")
                }
                console.log(users)
                const ids = users.map(user => user._id);

                updateAge(ids);
    })

    function updateAge(ids){
        db.collection('users').updateMany(
            { _id: { $in: ids}},
            { $inc:{age : 4}}
        )
        .then((data1)=>{
            console.log(data1.modifiedCount)
        }).catch((error)=>{
            console.log(error)
        })
        
    }


    //////////////////////////////////////////////////////////////////////////

    db.collection('users').updateMany({},{
        $inc:{age: 10 }
    })
    .then((data1)=>{
        console.log(data1.modifiedCount)
    }).catch((error)=>{
        console.log(error)
    })



    /////////////////////////////////////////////////////////////////

    db.collection('users').deleteMany({age:37})
    .then((data1)=>{
        console.log(data1.deletedCount)
    }).catch((error)=>{
        console.log(error)
    })

   
        

})




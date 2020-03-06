import React from 'react';

const NewsList = (props) => {
   // console.log(props);

   const mynews = props.newsData.map((data)=>{
        return(
            <div key ={data.id}>
                <h3>{data.title}</h3>
                <div>{data.type}</div>
            </div>
        )
   })
    return(
        <div>
           {mynews}
        </div>
    )
}

export default NewsList;
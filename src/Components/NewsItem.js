import React from 'react';
import PropsTypes from 'prop-types';
const NewsItem =(props)=>{
      let {title,description,imageUrl,newsUrl,author,date}=props;
        return (
            <div>
            <div class="card" style={{width:"18rem "}}>
 <img src={!imageUrl?"https://media.istockphoto.com/id/1065782416/photo/online-news-in-mobile-phone-close-up-of-smartphone-screen-man-reading-articles-in-application.jpg?s=612x612&w=0&k=20&c=SuzjE60rEoTBe9TbpVKE2g0Q8JNn3Qf98wDgk37xZaI=":imageUrl} class="card-img-top" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">{title}</h5>
   <p class="card-text">{description}</p>
   <p class="card-text"><small class="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
   <a href={newsUrl} target="_blank" class="btn btn-sm btn-dark">Read More</a>
 </div>
</div>
            </div>
        );
}

export default NewsItem;

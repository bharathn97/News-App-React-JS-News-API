import React,{useEffect,useState} from 'react';
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
const News =(props)=>
 {
   const [articles,setArticles]=useState([]);
   const [loading,setLoading]=useState(false);
   const [page,setPage]=useState(1);
   const [totalResults,settotalResults]=useState(0);
const updateNews=async()=>
 {
   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=822c5373feae4c7d93da2b449d11e1d0&page=${page}&pageSize=${props.pageSize}`;
   let data= await fetch(url);
   let parsedData=await data.json();
   setArticles(parsedData.articles);
   settotalResults(parsedData.totalResults);
 }
  useEffect(()=>{
    updateNews();
  },[page]);
  const handleNextClick= async ()=>{
    setPage(page+1);
     updateNews();
  };
  const handlePreviousClick=async()=>{
  setPage(page-1);
  updateNews();
};

    return (
        <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        <div className="row">
        {articles.map((element)=>
           {
            return( <div className="col md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
            </div> );
           }
        )}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePreviousClick} >&larr; Previous</button>
        <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type="button" class="btn btn-dark" onClick={handleNextClick} >Next &rarr;</button>
        </div>
        </div>
    );
}
News.defaultProps={
  pageSize:8,
  country:"us",
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News;

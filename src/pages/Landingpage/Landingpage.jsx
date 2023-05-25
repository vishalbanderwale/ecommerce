import Category from "../../components/Category/Category";
import Banner from "../../components/Banner/Banner";

import "./Landingpage.css";

import SubHeadingImage from "../../components/SubHeadingImage/SubHeadingImage";
import { useEffect, useState } from "react";

function LandingPage() {
  const[land,setland]=useState([])
  const  Myland=async()=>{
    const result= await fetch("/api/categories");
    const newland =await result.json();
    setland(newland.categories );
   
  }
  useEffect(()=>{Myland()},[])
  return (
    <div>
      <Banner />

<div className="sub">
<SubHeadingImage/>
</div>
      <div className="Category-data">
        {
          land.map((mitem)=><Category cat={mitem} />)
        }
        
      </div>
     
    </div>
  );
}
export default LandingPage;

import React, { useEffect, useState } from 'react'
import { Custombutton } from '../components/custombutton'
import ReactPlayer from 'react-player';
import { Videocard } from '../components/videocard';
import { TikTokEmbed } from 'react-social-media-embed';
import CountryFlag from 'react-country-flag';



export const Videopage = (props) => {

  const[objects, setObjects]= useState([]);
  const[filter, setFilter]= useState("fishing");
  const [color, setColor]= useState("all");



    async function fetchData() {
        try {

          console.log("this is the filter we are sending", filter);
          const response = await fetch(`http://localhost:3001/api/v1/videodata?filter=${filter}&color=${color}`);
          console.log("this is how the response looks like")
          console.log(response);

          const {videoInfo, total} = await response.json();
          console.log("this is how the body looks like")
          console.log(videoInfo); // Do something with the data
          setObjects(videoInfo);
          props.setTotalLikes(total[0]);
          props.setTotalComments(total[1]);
          props.setTotalShares(total[2]);
          props.setTotalVideos(total[3]);

        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
            

      useEffect(()=>{
        fetchData();
      },[filter, color])


      const handleFilterChange = async (e) => {
        const selectedFilter = e.target.value;
        setFilter(selectedFilter);
        setColor("all");
    }
      



  return (
    <div className='w-11/12 mx-auto overflow-auto bg-white'>


        <div className='flex gap-4 mb-4 font-semibold '>

          <select onChange={(e)=>(handleFilterChange(e))} className=' bg-white text-black p-2 rounded-lg text-xl border-2 border-black' >
            <option value="fishing">China Illegal Fishing</option>
            <option value="mining">China Illegal Mining</option>
          </select>



          <button className={` ${color=="all" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
          onClick={()=>(setColor("all"))}>
          All
          </button>

          <button className={` ${color=="Africa" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
          onClick={()=>(setColor("Africa"))}>
          Africa
          </button>


          <button className={` ${color=="SCS" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
          onClick={()=>(setColor("SCS"))}>
          South China Sea
          </button>

          

          <button className={` ${color=="Eastern Pacific" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
          onClick={()=>(setColor("Eastern Pacific"))}>
          Eastern Pacific
          </button>

          <button className={` ${color=="ECS" ? "bg-gray-900 text-white" : " bg-white text-black"} p-2 rounded-lg text-xl border-2 border-black`}
          onClick={()=>(setColor("ECS"))}>
          East China Sea
          </button>



{/* 
          

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="GH" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="US" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="AR" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="EC" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="JP" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="KR" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="CN" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="ID" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="PH" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="TW" svg />
          </div>

          <div  style={{ width: '100px' }}>
            <CountryFlag style={{ width: '100px', height:'50px' }}  countryCode="VN" svg />
          </div>

           */}



        </div>


   


        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 '>
            

          {/* {objects.map((obj, index) => (
            <TikTokEmbed url={obj.url} />
          ))} */}


          {objects.map((obj, index) => (
            <Videocard key={index} obj={obj} />
          ))}

        </div>


    </div>
  )
}

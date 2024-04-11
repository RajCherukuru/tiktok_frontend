import React, { useEffect, useState } from 'react'
import CountryFlag from 'react-country-flag';
import countryCodeLookup from 'country-code-lookup';


import ReactPlayer from 'react-player';

export const Videocard = (props) => {

    const { obj } = props;

    // Access properties of the obj object
    let { videourl, desc, likes, id, userName, country, category, avatar, url } = obj;

    if(country){
      country=country.trim();
    }
    

    if (country === "Galápagos Islands") {
      country = "Ecuador"; // or handle it as needed
  }

  if(country =="Second Thomas Shoal"){
    country="Philippines"
  }

  if(country=="S. Korea"){
    country="South Korea"
  }

  let countryCode;
  

    
    
    if(country==="DRC"){
      countryCode="CD"
    }
    else if(country==="Congo"){
      countryCode="CG"
    }
    else {
      let countryData = countryCodeLookup.byCountry(country);
      countryCode= countryData?  countryData.iso2 : null;
    }

    if(country){
      country=country.toUpperCase();
    }
    

    

    
    
  
  return (

    <div className='flex flex-col gap-2 w-72'>


              <div className='rounded-lg'>
              <ReactPlayer 
                        url={`https://1225507153-tiktok.s3.amazonaws.com/final+videos/${id}.mp4`}
                        controls={true}
                        width='100$'
                        height='100%'
                      />
              </div>

            

              <div className=''>

                  <div className='flex gap-2 flex items-center'>

                    { countryCode && <div>
                      <CountryFlag className='border border-black'  style={{ width: '40px', height:'30px' }}  countryCode={countryCode} svg />
                    </div>}

                    <h3 className='font-bold'>- {country}</h3>

                  </div>
                  

                    <p className='overflow-hidden max-h-24'>{desc}</p>

              </div>

            



            <div className='flex justify-between items-center'>

                <div className='flex flex-row gap-2 items-center justify-center'>

                    <img className='rounded-full' height="30px" width="30px" src={avatar}></img>

                    
                    <a href={url} target='blank' className='pointer hover:underline'>
                    <div className=' w-20'>{userName}</div>
                    </a>

                </div>

                <p>Likes: {likes}</p>


            </div>





    </div>

  )
}

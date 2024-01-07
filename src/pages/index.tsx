import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AdvStyle, Header, Search } from '../ReactStyles/AppStyles'
import AdCard from './AdCard'
import { Fragment, useEffect, useState } from 'react'
import addData from "@/firebase/firestore/addData";
import { getAllDocuments } from "@/firebase/firestore/getData";
const inter = Inter({ subsets: ['latin'] })
let count = 3;
export default function Home() {



  let AdvertisementStore: any[] = [
    {
      imageSrc: "https://www.marketing91.com/wp-content/uploads/2020/06/Colgate-Advertising-Example-Torture-Test-Approach.jpg",
      title: "Ad 1",
      content: `Colgate, in its advertisements, shows how strong your teeth should
      be and how Colgate is going to do that for you.

      In its advertisements, it shows what things harm your teeth and how can you prevent
      them. Colgate created awareness and educating ads to connect with its customers in a
      better manner.

      You can get peoplesâ€™ attention in multiple ways; one of them is educating them and
      telling them how you can help.

      Colgate comes up with innovative and exciting advertisements through which it aware
      of people about dental issues.`
    },
    {
      imageSrc: "https://www.marketing91.com/wp-content/uploads/2020/06/Colgate-Advertising-Example-Torture-Test-Approach.jpg",
      title: "Ad 2",
      content: `Colgate, in its advertisements, shows how strong your teeth should
      be and how Colgate is going to do that for you.

      In its advertisements, it shows what things harm your teeth and how can you prevent
      them. Colgate created awareness and educating ads to connect with its customers in a
      better manner.

      You can get peoplesâ€™ attention in multiple ways; one of them is educating them and
      telling them how you can help.

      Colgate comes up with innovative and exciting advertisements through which it aware
      of people about dental issues.`
    },
    {
      imageSrc: "https://www.marketing91.com/wp-content/uploads/2020/06/Colgate-Advertising-Example-Torture-Test-Approach.jpg",
      title: "Ad 3",
      content: `Colgate, in its advertisements, shows how strong your teeth should
      be and how Colgate is going to do that for you.

      In its advertisements, it shows what things harm your teeth and how can you prevent
      them. Colgate created awareness and educating ads to connect with its customers in a
      better manner.

      You can get peoplesâ€™ attention in multiple ways; one of them is educating them and
      telling them how you can help.

      Colgate comes up with innovative and exciting advertisements through which it aware
      of people about dental issues.`
    },
  ]
  const [data, setData] = useState<any[]>(AdvertisementStore);


  function filterDuplictate(data: any[]) {
    return data.filter((v,i,a)=>a.findIndex(v2=>(v.title === v2.title && v.content===v2.content))===i)
  }

  
  useEffect(() => {
    (async () => {
      setInterval(async()=>{
        const response = await getAllDocuments("posts");
        console.log(response);
        const filteredData = filterDuplictate(response);
        const new_data = [...data,...filteredData];
        // setData(current => [...current, ...filteredData]);
        setData(new_data);
      },5000);
      
    })()
  }, [])

  function handleClick() {



  }

  return (
    <Fragment>
        <div className="container">
          <div style={Header}>
            <h1 className="display-2">The AdBoard</h1>
          </div>
          <div className="grid">
            {/* <div className="input-group mb-3" style={Search}>
              <input type="text" className="form-control" placeholder="Search ad..." aria-label="search"
                aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>
                Search
              </button>
            </div> */}
            <div className="adv-container" style={{marginTop: "5%"}}>
              {
                data.map((item: any, key: any) => (<AdCard key={key} imageSrc={item.imageSrc} title={item.title} content={item.content} />))
              }
            </div>
          </div>
        </div>
    </Fragment>
  )
}


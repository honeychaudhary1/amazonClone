// eslint-disable-next-line no-unused-vars
import React from 'react'
import Crousel from './Crousel/Crousel'
import Card  from './Card/Card'
import './Home.css'

let myObj = [
  {
    title: "Home Appliances Sale | Save up to 55%",
    link1: "https://shorturl.at/5FUp7",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Big Discount on Kitchen Appliances | Limited Time Offer",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult._SY232_CB553870684_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise._SY232_CB553870684_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_1._SY232_CB570220221_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Upgrade Your Home with Top Appliances | 55% Off",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_372_All_customer_july_2._SY232_CB567469224_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/QC_372_All_customer_july_3._SY232_CB567469124_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools2x._SY232_CB424026090_.jpg"
  },
  {
    title: "Get the Best Appliances for Your Home | Discounts Available",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Home Appliances Sale | Save up to 55%",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-372-232._SY232_CB636048992_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-372-232._SY232_CB636048992_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-372-232._SY232_CB636048992_.jpg"
  },
  {
    title: "Big Discount on Kitchen Appliances | Limited Time Offer",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Upgrade Your Home with Top Appliances | 55% Off",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Nov13/Sports_hi._SY232_CB541153107_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Nov13/Watches_Hi._SY232_CB541153107_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Get the Best Appliances for Your Home | Discounts Available",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Home Appliances Sale | Save up to 55%",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Big Discount on Kitchen Appliances | Limited Time Offer",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Upgrade Your Home with Top Appliances | 55% Off",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  },
  {
    title: "Get the Best Appliances for Your Home | Discounts Available",
    link1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    link2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
    link3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
    link4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
    page: "https://www.amazon.com/"
  }
];



function Home() {
  return (
    <div>

      <Crousel />
      <div className='cards'>
      
      {myObj.map((item, index)=>(
              <Card   
              key={index} 
              title={item.title} 
              link1={item.link1}
               link2={item.link2}
               link3={item.link3}
               link4={item.link4}
               page={item.page} />
      ))}
   
      
      
      </div>
      
    </div>
  )
}

export default Home
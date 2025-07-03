'use client';

import { bannerText } from '@/variables/home/section_1';
import { motion } from 'framer-motion';
import "./sectionOne.css";

const StaticText =()=> {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="bannerText absolute z-10 text-white w-full top-[35%] px-4 space-y-2"
    >
        {
            bannerText?.map((ele,index)=>{
                return (
                    <h5 key={index} className={ele.className}>
                        {ele.data}
                    </h5>
                )
            })
        }
      
    </motion.div>
  );
}
export default StaticText;

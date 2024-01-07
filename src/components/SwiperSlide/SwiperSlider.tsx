// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Image,Text } from '@chakra-ui/react'
// import required modules
import { Autoplay, EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './SwiperSlider.module.css'
import { motion } from "framer-motion"
import { fadeInAnimation } from '../../framer_config';

const SwiperSlider = () => {

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
      >
        <Box 
          margin={"30px"}
        >
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[Autoplay,EffectCards]}
            className={styles.swiper}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >

            <SwiperSlide className={styles.swiperSlide}>
              <Image src="/product_1.jpg"/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image src="/product_2.jpg"/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image src="/product_3.jpg"/>
            </SwiperSlide>

          </Swiper>

          <Text margin="15px" fontSize={"14px"}>一盒只需💰Rm 32 <br/> 一盒内有8个独立包装 [ 35g each ]</Text>
          
      </Box>
      </motion.div>
    </>
  )
}

export default SwiperSlider
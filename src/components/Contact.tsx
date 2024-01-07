import { Box, HStack, Heading,Link,Text} from '@chakra-ui/react'
import Lottie from 'react-lottie';
import facebookAnimationData from '../lotties/facebook.json';
import instagramAnimationData from '../lotties/instagram.json';
import whatsappAnimationData from '../lotties/whatsapp.json';
import { motion } from "framer-motion"
import { zoomInAnimation } from '../framer_config';
import ViewPortObserver from './ViewPortObserver';

const Contact = () => {

    // lottie config
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: facebookAnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <>
        <ViewPortObserver>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={zoomInAnimation}
            >

                <Box 
                    margin={"20px"}
                >
                    <Heading fontSize={"23px"}>🛒 赶快 DM 我们下单吧 🛒</Heading>  

                    <HStack margin="20px" display={"flex"} justifyContent={"center"}>
                        <Link marginX="10px" href='https://wa.me/60127892007' isExternal>
                            <Lottie 
                                options={{...defaultOptions,animationData:whatsappAnimationData}}
                                height={80}
                                width={80}
                            />
                        </Link>
                        <Link marginX="10px" href='https://www.facebook.com/shireentan95' isExternal>
                            <Lottie 
                                options={{...defaultOptions,animationData:facebookAnimationData}}
                                height={80}
                                width={80}
                            />
                        </Link>
                        <Link marginX="10px" href='https://www.instagram.com/shireenn.t/' isExternal>
                            <Lottie 
                                options={{...defaultOptions,animationData:instagramAnimationData}}
                                height={80}
                                width={80}
                            />
                        </Link>
            
                    </HStack>

                    <Text margin="5px">
                        🔔 槟城区都可以面交
                    </Text>
                    <Text margin="5px">
                        🚚 其它州都是邮寄哦
                    </Text>

                </Box>

        </motion.div>
      </ViewPortObserver>
      </>
    )
}

export default Contact
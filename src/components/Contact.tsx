import { Box, HStack, Heading,Link,Text} from '@chakra-ui/react'
import Lottie from 'react-lottie';
import facebookAnimationData from './lotties/facebook.json';
import instagramAnimationData from './lotties/instagram.json';
import whatsappAnimationData from './lotties/whatsapp.json';

const Contact = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: facebookAnimationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
    <Box margin={"30px 0px 20px 0"}>
        <Heading fontSize={"23px"}>🛒 赶快 DM 我们下单吧 🛒</Heading>  
        <HStack margin="20px" display={"flex"} justifyContent={"center"}>
            <Link marginX="10px" href='https://web.whatsapp.com/send?phone=+60127892007' isExternal>
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
    )
}

export default Contact
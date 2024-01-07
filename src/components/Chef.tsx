import { Box,HStack,Heading,Text,Image, VStack } from '@chakra-ui/react'
import { TypeAnimation } from 'react-type-animation';
import ViewPortObserver from './ViewPortObserver';
import { motion } from "framer-motion"
import { zoomInAnimation } from '../framer_config';

const Chef = () => {

  return (
    <>  
      <ViewPortObserver>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={zoomInAnimation}
          >
        <Box 
          margin={"50px"}
        >
 
          <Heading fontSize={"23px"} >👨🏼‍🍳 厨师 👩🏼‍🍳</Heading>  

          <Box display={"flex"} justifyContent={"space-evenly"} alignItems="center" flexDirection={"column"}>
            
              <HStack 
                height={"200px"}
              >
                <VStack width={"100px"} marginX="10px">
                  <Image 
                    src={"/shireen.png"} 
                    borderRadius="full"
                    boxSize="100px"
                    border={"3px solid white"}
                  /> 
                  <Text>Shireen Tan</Text>
                </VStack>
                <TypeAnimation
                  sequence={[
                      // Same substring at the start will only be typed out once, initially
                      '" 我为什么喜欢制作凤梨酥呢?',
                      1500,
                      '" 我为什么喜欢制作凤梨酥呢？因为在制作的过程中',
                      1500,
                      '" 我为什么喜欢制作凤梨酥呢？因为在制作的过程中我感受到了传统与创新的完美结合。\n',
                      1500,
                      '" 我为什么喜欢制作凤梨酥呢？因为在制作的过程中我感受到了传统与创新的完美结合。\n每一次搅拌、擀面、包馅的过程都是我独特的手艺与热情投入的体现。',
                      1500,
                      '" 我为什么喜欢制作凤梨酥呢？因为在制作的过程中我感受到了传统与创新的完美结合。\n每一次搅拌、擀面、包馅的过程都是我独特的手艺与热情投入的体现。我享受着看着简单原料变成美味的成品的那份成就感。\n对我来说，做凤梨酥不仅仅是一种技艺，更是传承与乐趣的结合。"',
                      1500
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{  whiteSpace: 'pre-line',fontSize: '13px',textAlign:"left",width:"250px"}}
                />
              </HStack>


              <HStack 
                  height={"200px"}
                >
                <VStack width={"100px"} marginX="10px">
                    <Image 
                      src={"/albert.png"} 
                      borderRadius="full"
                      boxSize="100px"
                      border={"3px solid white"}
                    /> 
                    <Text>Albert Teh</Text>
                  </VStack>
                <TypeAnimation
                  sequence={[
                      // Same substring at the start will only be typed out once, initially
                      '" 当谈到我为什么喜欢制作凤梨酥时，其中一个重要原因是它蕴含着家乡的味道和记忆。',
                      1500,
                      '" 当谈到我为什么喜欢制作凤梨酥时，其中一个重要原因是它蕴含着家乡的味道和记忆。\n制作凤梨酥不仅仅是技艺的展示，更是对我童年时在家中看着家人亲手制作这道美味小吃的回忆。',
                      1500,
                      '" 当谈到我为什么喜欢制作凤梨酥时，其中一个重要原因是它蕴含着家乡的味道和记忆。\n制作凤梨酥不仅仅是技艺的展示，更是对我童年时在家中看着家人亲手制作这道美味小吃的回忆。\n每一次我在厨房里搅拌、包馅，都仿佛把我带回了过去。',
                      1500,
                      '" 当谈到我为什么喜欢制作凤梨酥时，其中一个重要原因是它蕴含着家乡的味道和记忆。\n制作凤梨酥不仅仅是技艺的展示，更是对我童年时在家中看着家人亲手制作这道美味小吃的回忆。\n每一次我在厨房里搅拌、包馅，都仿佛把我带回了过去。这份连结让我对凤梨酥充满了热爱与情感，也让我能将这份美味传递给更多人。"',
                      1500
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{  whiteSpace: 'pre-line',fontSize: '13px',textAlign:"left",width:"250px"}}
                />
              </HStack>
          </Box>
          
        </Box>
        </motion.div>
      </ViewPortObserver>
    </>
  )
}

export default Chef
import { Box, Text,Image, HStack } from '@chakra-ui/react'

const Intro = () => {
  return (
    <>
    <Box>
      <Text lineHeight={"25px"} fontSize={"14px"}>
        这款传统台湾小吃将新鲜凤梨果肉与松脆饼皮完美融合<br/>
        每一口都散发着浓郁的凤梨香气, 口感酥脆，果馅酸甜可口<br/>
        不论作为礼物还是自己品尝，都能享受到纯正台湾风味的美味<br/>
        立即品尝我们的独特凤梨酥，感受正宗台湾美食的魅力<br/>
        內里不甜腻，外皮有奶香！✨
      </Text>
    </Box>
    
    <Box margin={"20px"}>
      <Text display="flex" flexDirection="column" alignItems={"center"} fontSize={"15px"}>
        <HStack>
          <Image src='/dash_ring_bullet.svg' boxSize="35px"/><Text width="80px" textAlign={"left"}>手工制作</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Image src='/dash_ring_bullet.svg' boxSize="35px"/><Text width="80px" textAlign={"left"}>不含色素</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Image src='/dash_ring_bullet.svg' width={"35px"}/><Text width="80px" textAlign={"left"}>不含防腐剂</Text>
        </HStack>
        <HStack>
          <Image src='/dash_ring_bullet.svg' boxSize="35px"/><Text width="80px" textAlign={"left"}>新鲜制作</Text>
        </HStack>
        <HStack>
          <Image src='/dash_ring_bullet.svg' boxSize="35px"/><Text width="80px" textAlign={"left"}>限量供应</Text>
        </HStack>
      </Text>
    </Box>
    </>
  )
}

export default Intro
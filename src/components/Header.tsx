import { HStack, Image,Text  } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwtich'

const Header = () => {
  return (
        <HStack justifyContent="space-between">
            <HStack>
              <Image src={"pineapple.png"} boxSize='30px'/> 
              <Text>凤梨酥 <Text display={"inline-block"} fontSize={"13px"}>By</Text> Shireen & Albert</Text>
            </HStack>
            <ColorModeSwitch />
        </HStack>
  )
}

export default Header
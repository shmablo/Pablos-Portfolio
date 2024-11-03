import { useState } from 'react'
import { Link } from "react-router-dom";
import { Box, Text, Image, HStack } from '@chakra-ui/react'


function AnimatedLink({ href, color, children }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const linkStyle = {
    color,
    textDecoration: 'none',
    position: 'relative'
  }

  const underlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: isHovered ? '100%' : '0%',
    height: '2px',
    background: '#5F967C',
    transition: 'width 0.3s ease-in-out'
  }

  return (
    <Link to={href} passHref>
      <Box
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <span style={underlineStyle} />
      </Box>
    </Link>
  )
}

const Logo = () => {
  return (
    <HStack>
      <Image src={'/images/stardewShip.jpg'} width={10} height={10} />
      <AnimatedLink href={'/'} color="black">
        <Text fontFamily={'M PLUS Rounded 1c'} fontSize={'xl'} color={'black'}>
          Pablo Ramos
        </Text>
      </AnimatedLink>
    </HStack>
  )
}

export default Logo
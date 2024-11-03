import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  HStack,
  Text,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo.js'
import { Slant as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'


function LinkWithAnimation({ href, color, children }) {
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

  //This checks if the link is an external link or an internal link, fixed the resume button
  if (href.startsWith("http")) {
    return (
      <a href={href} style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank" rel="noopener noreferrer">
        {children}
        <span style={underlineStyle} />
      </a>
    );
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

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      zIndex={2}
      css={{ backdropFilter: 'blur(10px)' }}
      {...props}
    >
      <Container display="flex" p={2} wrap="wrap">
        <Logo />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          justifyContent="flex-end"
          paddingLeft="120pt"
        >
          <LinkWithAnimation href="/projects" color="black">
            Projects
          </LinkWithAnimation>
          <LinkWithAnimation href="/blog" color="black">
            Blog
          </LinkWithAnimation>
          <LinkWithAnimation
            href="https://drive.google.com/file/d/1G5UZW5CRzUkG03fkYUVnMNceDX4O8GFy/view?usp=sharing"
            color="black"
          >
            Resume
          </LinkWithAnimation>
        </Stack>

        <Box flex={1} align={'right'}>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<Hamburger size={20} />}
                aria-label={'Options'}
                bg="white"
              />
              <MenuList>
                <Link to="/" passHref>
                  <MenuItem bg="white" _hover={{ bg: '#E4E8EF' }}>
                    Home
                  </MenuItem>
                </Link>
                <Link to="/projects" passHref>
                  <MenuItem bg="white" _hover={{ bg: '#E4E8EF' }}>
                    Projects
                  </MenuItem>
                </Link>
                <Link to="/blog" passHref>
                  <MenuItem bg="white" _hover={{ bg: '#E4E8EF' }}>
                    Blog
                  </MenuItem>
                </Link>
                <Link 
                  to="https://drive.google.com/file/d/1G5UZW5CRzUkG03fkYUVnMNceDX4O8GFy/view?usp=sharing"
                  passHref
                >
                  <MenuItem bg="white" _hover={{ bg: '#E4E8EF' }}>
                    Resume
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
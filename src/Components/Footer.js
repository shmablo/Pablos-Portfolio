import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, VStack, HStack } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

const AnimatedLogo = ({ logo }) => {
  return (
    <Box
      as={logo}
      transition="all 0.2s ease-in-out"
      _hover={{ transform: 'translateY(-2px)', color: '#4C7863' }}
      fontSize="32px"
      color="#5F967C"
    />
  )
}

const Footer = () => {
  return (
    <VStack>
      <Container bg="white">
        <HStack justifyContent={'center'}>
          <Box>
            <Link
              href="https://github.com/your-github-username"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
            >
              <AnimatedLogo logo={IoLogoGithub} />
            </Link>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
            >
              <AnimatedLogo logo={IoLogoLinkedin} />
            </Link>
          </Box>
          <Box>
            <Link
              href="mailto:your-email@example.com"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
            >
              <AnimatedLogo logo={IoMail} />
            </Link>
          </Box>
        </HStack>
        <Link
          href="https://github.com/your-github-username/personal-site"
          isExternal
        >
          <Box
            pt={2}
            align="center"
            opacity={0.3}
            fontSize={'sm'}
            color={'black'}
          >
            site last updated 8/14/2024
          </Box>
        </Link>
      </Container>
      <Box
        position="fixed"
        bg="#5F967C"
        bottom="0"
        left="0"
        width="100%"
        textColor="#5F967C"
        height="15px"
        fontSize="1px"
      >
        easter egg!!
      </Box>
    </VStack>
  )
}

export default Footer;

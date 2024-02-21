// import {
//   Box,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   Button,
//   Flex,
//   Link,
//   useColorModeValue,
// } from "@chakra-ui/react";

import { Flex, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Link, useColorModeValue, background } from "@chakra-ui/react";

import PropTypes from "prop-types";
import React, { useState } from "react";
import AdminNavbarLinks from "./AdminNavbarLinks";
import { AddIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';


export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const history = useHistory(); 
  const {
    variant,
    children,
    fixed,
    secondary,
    brandText,
    onOpen,
    ...rest
  } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText = "white";
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "none";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  if (props.fixed === true)
    if (scrolled === true) {
      navbarPosition = "fixed";
      navbarShadow = "0px 7px 23px rgba(0, 0, 0, 0.05)";
      navbarBg =
        "linear-gradient(rgba(255, 255, 255, 0) 0% rgba(255, 255, 255, 0.39) @ 100%)";
      navbarBorder = "rgba(226, 232, 240, 0.3)";
      navbarFilter = "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))";
      navbarBackdrop = "blur(42px)";
    }
  if (props.secondary) {
    navbarBackdrop = "blur(42px)";
    // navbarPosition = "absolute";
    // mainText = "white";
    // secondaryText = "white";
    // secondaryMargin = "22px";
    // paddingX = "30px";
  }
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  const redirctaddpage = () =>{
    history.push("./tables");
  }
  return (
    <Flex
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderWidth='1.5px'
      borderStyle='solid'
      transitionDelay='0s, 0s, 0s, 0s'
      transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
      transition-property='box-shadow, background-color, filter, border'
      transitionTimingFunction='linear, linear, linear, linear'
      alignItems={{ xl: "center" }}
      borderRadius='16px'
      display='flex'
      minH='75px'
      justifyContent={{ xl: "center" }}
      lineHeight='25.6px'
      mx='auto'
      mt={secondaryMargin}
      pb='8px'
      left={document.documentElement.dir === "rtl" ? "30px" : ""}
      right={document.documentElement.dir === "rtl" ? "" : "30px"}
      px={{
        sm: paddingX,
        md: "30px",
      }}
      ps={{
        xl: "12px",
      }}
      pt='8px'
      top='18px'
      w={{ sm: "calc(100vw - 60px)", xl: "calc(100vw - 75px - 275px)" }}>
      <Flex
        w='100%'
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}>
        <Box w={{ sm: "100%", md: "100%" }}  mb={{ sm: "8px", md: "0px" }} style={{display:'flex' , flexDirection:'row',}}>
          <Breadcrumb>
            <BreadcrumbItem color='#A0AEC0'>
              <BreadcrumbLink href='#' color='#A0AEC0'>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href='#' color={mainText}>
                {brandText}&nbsp;&nbsp;
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Here we create navbar brand, based on route name */}
          <Link
            color={mainText}
            href='#'
            bg='inherit'
            borderRadius='inherit'
            fontWeight='bold'
            _hover={{ color: { mainText } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            {brandText}
          </Link>
          <Box  style={{display:'flex' , flexDirection:'row'}} ms='auto' w={{ sm: "auto", md: "unset" }}>
          <AdminNavbarLinks
            onOpen={props.onOpen}
            secondary={props.secondary}
            fixed={props.fixed}
            />
            </Box>
        </Box>


          <Box ms='auto' marginTop={{sm:'25px' , xl:'auto'}} w={{ sm: "100%", md: "unset" }}>
          
          <div className="d-flex justify-content-xxl-end ">
          <Button mt={{sm:'',md:'-40px'}} style={{background:' linear-gradient(95deg, #403FDE 0%, rgba(112.65, 63, 222, 0.59) 50%, rgba(64, 63, 222, 0) 100%' , width:'100%'}} onClick={redirctaddpage} className="text-white"><Icon className="mx-2" as={AddIcon} boxSize={4} /> ADD FUND</Button>
          </div>

          </Box>

          

      </Flex>
    </Flex>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};

// AdminNavbar.propTypes = {
//   brandText: PropTypes.string,
//   variant: PropTypes.string,
//   secondary: PropTypes.bool,
//   fixed: PropTypes.bool,
//   onOpen: PropTypes.func,
// };

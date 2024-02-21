import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";
import logos from "assets/img/Logo2.png";
// Custom Components
import AuthFooter from "components/Footer/AuthFooter";
import GradientBorder from "components/GradientBorder/GradientBorder";
import { useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-big-calendar";

function SignIn() {
  const titleColor = "white";
  const textColor = "gray.400";
  // const [signUp, setSignUp] = useState('')
  const history = useHistory();
  const [signIn, setSignIn] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referal_code, setReferal_code] = useState("");
  const [posts, setPosts] = useState("");
  const [user, setUser] = useState([]);

  // const [datase,setDatase] = useState({
  //   email : '',
  //   password:'',
  //   referal_code: '' ,
  // })

  // const handlesingin = (e) =>{
  //   e.preventDefault();
  //   if(email == ''){
  //     alert("Please enter your Email");
  //      return;
  //   }

  //   if(password == ''){
  //     alert("Please enter your password");
  //      return;
  //   }

  //   history.push("/Dashboard");
  //   Navigate('/signin', { replace: true });

  //   // if(users.code === Input.code ){
  //   //   if(resizeBy.statu === 200)(
  //   //     naviget();
  //   //   )
  //   // }

  // }

  // useEffect(() => {
  //   fetch('https://mysipmlm-192dbd53289e.herokuapp.com/api/v1/main/user-dashbord/')
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setPosts(result);
  //     });
  // }, []);

  // Rout Protets Mate.

  useEffect(() => {
    let userData = localStorage.getItem("userData");
    console.log("Responce", userData);
    if (userData) {
      history.push("/Dashboard");
    }
  }, []);

  const handlesingin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://mysipmlm-192dbd53289e.herokuapp.com/api/v1/main/user-login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            referal_code,
          }),
        }
      );

      const data = await res.json();
      setUser(data);
      console.log("login Successfully", data);
      if (!data.error) {
        localStorage.setItem("userData", JSON.stringify(data.data[0]));
      } else {
        alert("Invalid Login");
      }
      history.push("/Dashboard");
    } catch (err) {
      console.log("error messade", err.message);
    }
  };

  //   const handlesingin = () =>{
  //     if(SignUp == SignIn){
  //       alert("Login Successfull")
  //       return;
  //     }
  //     history.push("/Dashboard");
  // }

  return (
    <>
      <Flex position="relative">
        <Flex
          minH="100vh"
          h={{ base: "120vh", lg: "fit-content" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          pt={{ sm: "100px", md: "0px" }}
          flexDirection="column"
          me={{ base: "auto", lg: "50px", xl: "auto" }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: "none" }}
            mx={{ base: "auto", lg: "unset" }}
            ms={{ base: "auto", lg: "auto" }}
            w={{ base: "100%", md: "50%", lg: "450px" }}
            px="50px"
          >
            <Flex
              direction="column"
              w="100%"
              background="transparent"
              mt={{ base: "50px", md: "150px", lg: "160px", xl: "0px" }}
              mb={{ base: "60px", lg: "34px" }}
            >
              <div>
                <img
                  src={logos}
                  className="img-fluid d-block mx-auto"
                  width={200}
                />
              </div>

              <Heading color={titleColor} fontSize="32px">
                Nice to see you!
              </Heading>
              {/* <Text
              // mb='20px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Enter your email and password to sign in
            </Text> */}

              {/*========================================================== Email ========================================*/}

              <FormControl>
                <FormLabel
                  ms="4px"
                  mt="10px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                  value
                  requard
                >
                  Email
                </FormLabel>
                <GradientBorder
                  // mb='24px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    placeholder="Your email adress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </GradientBorder>
              </FormControl>

              {/* ======================================================= Passwoed ===================================== */}

              <FormControl>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                  mt="25px"
                >
                  Password
                </FormLabel>
                <GradientBorder
                  // mb='24px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </GradientBorder>
              </FormControl>

              {/*====================================================== Reffereal Code ==================================*/}

              <FormControl>
                <FormLabel
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                  color="white"
                  mt="25px"
                >
                  Reference Code
                </FormLabel>
                <GradientBorder
                  // mb='24px'
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color="white"
                    bg="rgb(19,21,54)"
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    type="number"
                    placeholder="Enter Your Reference Code"
                    value={referal_code}
                    onChange={(e) => setReferal_code(e.target.value)}
                  />
                </GradientBorder>
              </FormControl>

              <FormControl display="flex" alignItems="center">
                <DarkMode>
                  <Switch
                    id="remember-login"
                    colorScheme="brand"
                    me="10px"
                    mt="20px"
                  />
                </DarkMode>
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  mt="20px"
                  ms="1"
                  fontWeight="normal"
                  color="white"
                >
                  Remember me
                </FormLabel>
              </FormControl>

              {/* ===========================================Signin Button =============================================== */}
              <Button
                variant="brand"
                fontSize="10px"
                type="submit"
                w="100%"
                maxW="350px"
                h="45"
                mb="20px"
                mt="20px"
                onClick={handlesingin}
              >
                SIGN IN
              </Button>

              {/* <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Sign Up
                </Link>
              </Text>
            </Flex> */}
            </Flex>
          </Flex>
          {/* <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb='80px'>
          <AuthFooter />
        </Box> */}
          <Box
            display={{ base: "none", lg: "block" }}
            overflowX="hidden"
            h="100%"
            maxW={{ md: "50vw", lg: "50vw" }}
            minH="100vh"
            w="960px"
            position="absolute"
            left="0px"
          >
            <Box
              bgImage={signInImage}
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              position="absolute"
            >
              <Text
                textAlign="center"
                color="white"
                letterSpacing="8px"
                fontSize="20px"
                fontWeight="500"
              >
                {/* INSPIRED BY THE FUTURE: */}
              </Text>
              <Text
                textAlign="center"
                color="transparent"
                letterSpacing="8px"
                fontSize="36px"
                fontWeight="bold"
                bgClip="text !important"
                bg="linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)"
              >
                {/* THE VISION UI DASHBOARD */}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default SignIn;

// get new users strore

//  new users deteil get ===

import React from "react";
// import './App.css';
// import '../../App.css'
import '../../../src/App.css'


// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
  Heading,
  Stack,
  StackDivider,
  Box,
  Link,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData, tablesTableData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      {/* Authors Table */}
      {/* <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
        <CardHeader p='6px 0px 22px 0px'>
          <Text fontSize='lg' color='#fff' fontWeight='bold'>
            Authors Table
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px' color='gray.400'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Author
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Function
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Status
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Employed
                </Th>
                <Th borderBottomColor='#56577A'></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row, index, arr) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                    date={row.date}
                    lastItem={index === arr.length - 1 ? true : false}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card> */}
      {/* Projects Table */}
      {/* <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }} pb='0px'>
        <CardHeader p='6px 0px 22px 0px'>
          <Flex direction='column'>
            <Text fontSize='lg' color='#fff' fontWeight='bold' mb='.5rem'>
              Projects Table
            </Text>
            <Flex align='center'>
              <Icon
                as={AiFillCheckCircle}
                color='green.500'
                w='15px'
                h='15px'
                me='5px'
              />
              <Text fontSize='sm' color='gray.400' fontWeight='normal'>
                <Text fontWeight='bold' as='span' color='gray.400'>
                  +30%
                </Text>{" "}
                this month
              </Text>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant='simple' color='#fff'>
            <Thead>
              <Tr my='.8rem' ps='0px'>
                <Th
                  ps='0px'
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Companies
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Budget
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Status
                </Th>
                <Th
                  color='gray.400'
                  fontFamily='Plus Jakarta Display'
                  borderBottomColor='#56577A'>
                  Completion
                </Th>
                <Th borderBottomColor='#56577A'></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    name={row.name}
                    logo={row.logo}
                    status={row.status}
                    budget={row.budget}
                    progression={row.progression}
                    lastItem={index === arr.length - 1 ? true : false}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card> */}

{/* <Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card> */}
{/* 
<div >
  <div style={{width: 415, height: 590, left: 70, top: 141, position: 'absolute', background: 'linear-gradient(180deg, #060B28 0%, #0D27FF 100%), linear-gradient(0deg, rgba(0, 239.70, 255, 0.20) 0%, rgba(0, 239.70, 255, 0.20) 100%)', boxShadow: '6px 2px 6px 3px rgba(0, 0, 0, 0.25)', borderRadius: 17}} />
  <div style={{width: 302, height: 141, left: 123, top: 100, position: 'absolute', background: 'linear-gradient(180deg, #0008BF 0%, #353BD7 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15}} />
  <div style={{width: 260, height: 58, left: 163, top: 110, position: 'absolute', color: '#F5F5F5', fontSize: 24, fontFamily: 'Poppins', fontWeight: '700', letterSpacing: 4.80, wordWrap: 'break-word'}}>GOLDEN PACK </div>
  <div style={{width: 176, height: 84, left: 180, top: 141, position: 'absolute', color: 'white', fontSize: 56, fontFamily: 'Poppins', fontWeight: '800', letterSpacing: 11.20, wordWrap: 'break-word',display:'flex'}}><p>₹</p> 2000</div>
  <div style={{width: 260, height: 58, left: 203, top: 212, position: 'absolute', color: '#F5F5F5', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', letterSpacing: 3.20, wordWrap: 'break-word'}}>GET RETURNS </div>
  <div style={{width: 399, left: 87, color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700',  letterSpacing: 2.40, wordWrap: 'break-word', zIndex:'100',position: 'absolute' , top:'280px'}}>Income Per Days 1%<br/><br/>1000 X 1% - ₹10/- Per Day<br/><br/>10 X 100 - ₹ 1000/-<br/><br/>ROl is 100% - ₹1000/- <br/><br/>You Invested ₹1000/-</div>
  <div style={{width: 265, height: 71, left: 142, top: 593, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 4}} >
      <div className="d-flex justify-content-center pt-3">
    <a href="#" style={{fontFamily: 'Poppins'}} className="d-block fs-4">Buy Now</a>
      </div>
     </div>
</div> */}



  <div className="container">
    <div className="row">
      <div className="col-xl-3 col-md-6 mt-5 ">
        <div style={{background:'linear-gradient(180deg, #0008BF 0%, #353BD7 100%)',zIndex:'100' , padding:'0 50px 0 60px '  ,height:'120px', width:'max-content' , position:'absolute', marginTop:'-50px', marginLeft:'10px' , marginRight:'0' , borderRadius:'10px' }}>
          <p className="text-center fs-5 text-white">BROZE PACK</p>
          <p className="text-center fs-1 text-white">₹ 1000</p>
          {/* <p className="text-center fs-6 text-white"></p> */}
        </div>
      <div className="Rectangle1 pt-5" style={{position:'relative', height: 480, background: 'linear-gradient(180deg, #060B28 0%, #0D27FF 100%), linear-gradient(0deg, rgba(0, 239.70, 255, 0.20) 0%, rgba(0, 239.70, 255, 0.20) 100%)', boxShadow: '6px 2px 6px 3px rgba(0, 0, 0, 0.25)', borderRadius: 17}} >
        <p className="text-center text-white mt-4 pt-4">Income Per Days 1% </p>
        <p className="text-center text-white mt-4">1000 X 1% - ₹10/- Per Day </p>
        <p className="text-center text-white mt-4">10 X 100 - ₹ 1000/-</p>
        <p className="text-center text-white mt-4">ROl is 100% - ₹1000/- </p>
        <p className=" highlight">GET RETURNS  ₹2000/-</p>
        
        

        <div className="d-flex justify-content-center">
        <div style={{width: 200, height: 54, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 4, display:'flex',alignItems:'center', justifyContent:'center', fontSize:'23px', fontFamily:'poppins',marginTop:'45px', fontWeight:'700'}} > <Link>Buy Now</Link>  </div>
        </div>

      </div>
      </div>
{/*  */}
      <div className="col-xl-3 col-md-6 mt-5 bg-mt">
        <div style={{background:'linear-gradient(180deg, #0008BF 0%, #353BD7 100%)',zIndex:'100'  ,height:'120px' , width:'250px' , position:'absolute', marginTop:'-50px', marginLeft:'10px' , marginRight:'0' , borderRadius:'10px' }}>
          <p className="text-center fs-5 text-white">SILVER PACK</p>
          <p className="text-center fs-1 text-white">₹ 2000</p>
          {/* <p className="text-center fs-6 text-white">GET RETURNS </p> */}
        </div>
      <div className="Rectangle1 pt-5" style={{position:'relative', height: 480, background: 'linear-gradient(180deg, #060B28 0%, #0D27FF 100%), linear-gradient(0deg, rgba(0, 239.70, 255, 0.20) 0%, rgba(0, 239.70, 255, 0.20) 100%)', boxShadow: '6px 2px 6px 3px rgba(0, 0, 0, 0.25)', borderRadius: 17}} >
        <p className="text-center text-white mt-4 pt-4">Income Per Days 1% </p>
        <p className="text-center text-white mt-4">1000 X 1% - ₹10/- Per Day </p>
        <p className="text-center text-white mt-4">10 X 100 - ₹ 1000/-</p>
        <p className="text-center text-white mt-4">ROl is 100% - ₹1000/- </p>
        <p className="highlight">GET RETURNS  ₹4000/-</p>
        
        

                <div className="d-flex justify-content-center">
        <div style={{width: 200, height: 54, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 4, display:'flex',alignItems:'center', justifyContent:'center', fontSize:'23px', fontFamily:'poppins',marginTop:'45px', fontWeight:'700'}} > <Link>Buy Now</Link>  </div>
        </div>

      </div>
      </div>
{/*  */}
      <div className="col-xl-3 col-md-6 mt-5 bg-mt">
        <div style={{background:'linear-gradient(180deg, #0008BF 0%, #353BD7 100%)',zIndex:'100'  ,height:'120px' , width:'250px' , position:'absolute', marginTop:'-50px', marginLeft:'10px' , marginRight:'0' , borderRadius:'10px' }}>
          <p className="text-center fs-5 text-white">GOLDEN PACK</p>
          <p className="text-center fs-1 text-white">₹ 3000</p>
          {/* <p className="text-center fs-6 text-white">GET RETURNS </p> */}
        </div>
      <div className="Rectangle1 pt-5" style={{position:'relative', height: 480, background: 'linear-gradient(180deg, #060B28 0%, #0D27FF 100%), linear-gradient(0deg, rgba(0, 239.70, 255, 0.20) 0%, rgba(0, 239.70, 255, 0.20) 100%)', boxShadow: '6px 2px 6px 3px rgba(0, 0, 0, 0.25)', borderRadius: 17}} >
        <p className="text-center text-white mt-4 pt-4">Income Per Days 1% </p>
        <p className="text-center text-white mt-4">1000 X 1% - ₹10/- Per Day </p>
        <p className="text-center text-white mt-4">10 X 100 - ₹ 1000/-</p>
        <p className="text-center text-white mt-4">ROl is 100% - ₹1000/- </p>
        <p className="highlight">GET RETURNS  ₹6000/-</p>
        
        

                <div className="d-flex justify-content-center">
        <div style={{width: 200, height: 54, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 4, display:'flex',alignItems:'center', justifyContent:'center', fontSize:'23px', fontFamily:'poppins',marginTop:'45px', fontWeight:'700'}} > <Link>Buy Now</Link>  </div>
        </div>

      </div>
      </div>
{/*  */}
      <div className="col-xl-3 col-md-6 mt-5 bg-mt">
        <div style={{background:'linear-gradient(180deg, #0008BF 0%, #353BD7 100%)' ,zIndex:'100'  ,height:'120px' , width:'250px' , position:'absolute', marginTop:'-50px', marginLeft:'10px' , marginRight:'0' , borderRadius:'10px' }}>
          <p className="text-center fs-5 text-white">PLATINUM PACK</p>
          <p className="text-center fs-1 text-white">₹ 5000</p>
          {/* <p className="text-center fs-6 text-white">GET RETURNS </p> */}
        </div>
      <div className="Rectangle1 pt-5" style={{position:'relative', height: 480, background: 'linear-gradient(180deg, #060B28 0%, #0D27FF 100%), linear-gradient(0deg, rgba(0, 239.70, 255, 0.20) 0%, rgba(0, 239.70, 255, 0.20) 100%)', boxShadow: '6px 2px 6px 3px rgba(0, 0, 0, 0.25)', borderRadius: 17}} >
        <p className="text-center text-white mt-4 pt-4">Income Per Days 1% </p>
        <p className="text-center text-white mt-4">1000 X 1% - ₹10/- Per Day </p>
        <p className="text-center text-white mt-4">10 X 100 - ₹ 1000/-</p>
        <p className="text-center text-white mt-4">ROl is 100% - ₹1000/- </p>
        <p className="highlight">GET RETURNS  ₹10,000/-</p>
        
        

                <div className="d-flex justify-content-center">
        <div style={{width: 200, height: 54, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 4, display:'flex',alignItems:'center', justifyContent:'center', fontSize:'23px', fontFamily:'poppins',marginTop:'45px', fontWeight:'700'}} > <Link>Buy Now</Link>  </div>
        </div>

      </div>
      </div>
    </div>
  </div>


    </Flex>
  );
}

export default Tables;

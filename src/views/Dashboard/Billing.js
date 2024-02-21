
import React from "react";

// Chakra imports
import { Box, Button, Flex, Grid, Icon, Input, Spacer, Text } from "@chakra-ui/react";

// Images
import BackgroundCard1 from "assets/img/billing-background-card.png";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GradientBorder from "components/GradientBorder/GradientBorder";
import IconBox from "components/Icons/IconBox";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import TransactionRow from "components/Tables/TransactionRow";

// Icons
import { FaPencilAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { RiMastercardFill } from "react-icons/ri";
import {
  BillIcon,
  GraphIcon,
  MastercardIcon,
  VisaIcon,
} from "components/Icons/Icons";

// Data
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";
import { useState } from "react";

function Withdrawl() {

  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
  })
  const handleInputChange = (event) =>{
    setuserInfo({
      ...userInfo,
      file:event.target.file[0],
    });
  }


  const submit = async () =>{
    const formdata = new FormData() 
    formdata.append('avatar', userInfo.file);

    

  }


  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }} mx='auto'>
        <form class="row g-3 needs-validation" novalidate>
  <div class="col-lg-4 col-md-6">
    <label for="validationCustom01" class="form-label text-white">Name</label>
    <input type="text" class="form-control" id="validationCustom01" placeholder="Name"  required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>

  <div class="col-lg-4 col-md-6">
    <label for="validationCustom01" class="form-label text-white">Account Holder Name</label>
    <input type="text" class="form-control" id="validationCustom01"  placeholder="Account Holder Name"  required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>


  <div class="col-lg-4 col-md-6">
    <label for="validationCustomUsername" class="form-label text-white">Adress</label>
    <div class="input-group has-validation bg-white rounded-5">
      {/* <Input type="text" class="form-control " id="validationCustomUsername" aria-describedby="inputGroupPrepend" required /> */}
      <textarea class="form-control" placeholder="Adress" id="floatingTextarea2" style={{height: "40px"}}></textarea>
    </div>
  </div>


  <div class="col-lg-3 col-md-6">
    <label for="validationCustom05" class="form-label text-white">Bank Name</label>
    <input type="text" class="form-control" placeholder="Bank Name" id="validationCustom05" required />
  </div>

  <div class="col-lg-3 col-md-6">
    <label for="validationCustom05" class="form-label text-white">Account Number</label>
    <input type="text" class="form-control" placeholder="Account Number" id="validationCustom05" required />
  </div>

  <div class="col-lg-3 col-md-6">
    <label for="validationCustom05" class="form-label text-white">IFSC Code</label>
    <input type="text" class="form-control" placeholder="IFSC Code" id="validationCustom05" required />
  </div>



  <div class="col-lg-3 col-md-6">
    <label for="validationCustom05" class="form-label text-white">Account Type</label>
    <input type="text" class="form-control" placeholder="Account Type" id="validationCustom05" required />
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>


  <div class="col-lg-3 col-md-6">
    <label for="validationCustom04" class="form-label text-white">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>


  <div class="col-md-5 col-md-6">
    <label for="validationCustom03" class="form-label text-white">City</label>
    <input type="text" class="form-control" placeholder="City" id="validationCustom03" required />
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>



  <div class="col-lg-4 col-md-6">
    <label for="validationCustom03" class="form-label text-white">Upi Id</label>
    <input type="text" class="form-control" placeholder="Upi Id" id="validationCustom03" required />
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>

  <div class="col-lg-3 col-md-6">
    <label for="validationCustom01" class="form-label text-white">Account Id</label>
    <input type="text" class="form-control" placeholder="Account Id" id="validationCustom01" required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>




  <div class="col-lg-3 col-md-6">
    <label for="validationCustom01" class="form-label text-white">Aadhar Card Number</label>
    <input type="text" class="form-control" placeholder="Aadhar Card Number" id="validationCustom01" required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>


  <div class="col-lg-6 col-md-10">
    <label for="validationCustom01" class="form-label text-white">Pan Card Number</label>
    <input type="text" class="form-control" placeholder="Pan Card Number" id="validationCustom01" required />
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>


  <div className="col-md-6">
  <label for="validationCustom01" class="form-label text-white">Image:</label><br />
  <input type="file" name="video" onChange={handleInputChange} accept="Image/jpg" className="text-white" required/><br /><br />

  </div>

  <div className="col-md-6">
  <label for="validationCustom01" class="form-label text-white">Video:</label><br />
    <input type="file" name="video" id="" accept="video/mp4" className="text-white" required/>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input text-white" type="checkbox" id="invalidCheck" required />
      <label class="form-check-label text-white" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit" onClick={()=>submit()}>Submit form</button>
  </div>

    {userInfo.filepreview !== null ?
    <img className="previewimg" src={userInfo.filepreview} alt="UploadImage" />
    : null  
  }
</form>
    </Flex>
  );
}

export default Withdrawl;

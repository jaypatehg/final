import { Flex } from "@chakra-ui/react";

export default function Privacy() {
    return (    <Flex direction='column' pt={{ base: "120px", md: "75px" }} mx='auto'>
    <h3 style={{color: 'white'}}>Privacy Policy</h3> 
    <div style={{color: 'white', padding: 20}}>
     <> <p style={{fontSize: '25px', margin: '3px 0px'}}><b>Who we are</b></p>

Our website address is: https://mysip.ltd. <br />
<p style={{fontSize: '25px', margin: '3px 0px'}}><b>Comments</b></p>
When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
An anonymised string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service Privacy Policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
<p style={{fontSize: '25px', margin: '3px 0px'}}><b>Media</b></p><br />
If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
<p style={{fontSize: '25px', margin: '3px 0px'}}><b>Cookies</b></p> <br />
If you leave a comment on our site you may opt in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.<br />
When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.<br />
<p style={{fontSize: '25px', margin: '3px 0px'}}><b>Cookies</b></p> Embedded content from other websites<br />
Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.<br />
These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.<br />
<p style={{fontSize: '25px', margin: '3px 0px'}}><b>Who we share your data with</b></p><br />
If you request a password reset, your IP address will be included in the reset email.<br />
<p style={{fontSize: '25px', margin: '3px 0px'}}><b>How long we retain your data</b></p><br />
If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognise and approve any follow-up comments automatically instead of holding them in a moderation queue.<br />
For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.<br />
<p style={{fontSize: '25px', margin: '3px 0px'}}><b>What rights you have over your data</b></p><br />
 If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.<br />
 <p style={{fontSize: '25px', margin: '3px 0px'}}><b>Where your data is sent</b></p> <br />
Visitor comments may be checked through an automated spam detection service.<br />
</>
      {/* continue with the rest of the content */}
    </div></Flex>)
} 
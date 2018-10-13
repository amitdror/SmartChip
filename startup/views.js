
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const nodemailer = require('nodemailer');
// const express = require('express');

// function emailTemplate(name, newPassword) {
//     const output =
//         `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>
//        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
//          <title>Smart Chip - Reset Password Request</title>
//          <link href="https://fonts.googleapis.com/css?family=Open&#43;Sans:400,600,700" rel="stylesheet">
       
//          <style type="text/css">
//            .ReadMsgBody{
//              width:100%;
//              background-color:#ffffff;
//            }
//            .ExternalClass{
//              width:100%;
//              background-color:#ffffff;
//            }
//            body{
//              width:100%;
//              background-color:#ffffff;
//              margin:0;
//              padding:0;
//              -webkit-font-smoothing:antialiased;
//              font-family:Georgia,Times,serif;
//            }
//            table{
//              border-collapse:collapse;
//            }
//            @media only screen and (max-width: 640px){
//              .deviceWidth{
//                width:440px !important;
//                padding:0;
//              }
       
//            } @media only screen and (max-width: 640px){
//              .ImageWidth{
//                width:50px !important;
//                padding:0;
//                margin:auto;
//              }
       
//            } @media only screen and (max-width: 640px){
//              .center{
//                text-align:center !important;
//                margin:auto;
//              }
       
//            } @media only screen and (max-width: 479px){
//              .deviceWidth{
//                width:280px !important;
//                padding:0;
//              }
       
//            } @media only screen and (max-width: 479px){
//              .ImageWidth{
//                width:50px !important;
//                padding:0;
//                margin:auto;
//              }
       
//            } @media only screen and (max-width: 479px){
//              .center{
//                text-align:center !important;
//                margin:auto;
//              }
       
//            }   .container{
//                  width:100% !important;
//                  min-width:100% !important;
//                  height:auto !important;
//                }
//          </style></head>
//        <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="font-family: 'Open Sans', sans-serif;">
//        <!-- Wrapper -->
//        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="container" style="min-width:640px;">
//          <tr>
//            <td width="100%" valign="top" bgcolor="#ffffff" style="padding-top:20px;">
       
//              <!-- One Column -->
//              <table width="580" class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff" style="margin:0 auto;">
//                <tr>
//                  <td valign="top" align="center" style="padding:0;" bgcolor="#ffffff">
//                      <img class="deviceWidth" src="public/images/smartchip_logo.jpeg" alt="" border="0" width="125" style="display: block;">
//                    </a>
//                  </td>
//                </tr>
//                <tr>
//                  <td style="font-size:13px;color:#282828;font-weight:normal;text-align:left;font-family:'Open Sans', sans-serif;line-height:24px;vertical-align:top;padding:15px 8px 10px 8px;" bgcolor="#ffffff">
//                    <h1 style="text-align:center;font-weight:600;margin:30px 0 50px 0;">PASSWORD RESET REQUEST</h1>
//                    <p>Dear Postman User,</p>
//                      <p>We have received your request to reset your password. Please click the link below to complete the reset:</p>
//                      </td>
//                      </tr>
//                      <tr>
//                          <td style="padding-bottom:30px;">
//                              <a href="http://links.getpostman.com/wf/click?upn=adLV3GOr9ek3RxS7Vo9JB3KjKDsfphZnY5z0fpoXeU1swLwuYWu3cd9B-2FVu1-2BncnxSov7oWXLkv0lxndOcHy-2B0-2FC4TUybF0zoap6C-2FYzsDHBwqWvKYuofpn9MuoucqLzgsCQOdbynZoxDlVWLhq0ltjc9lLAw2qN-2F8UIkZ4tu4o-3D_bEZWnqSPVJcI9spjX4EwkcvmdZMalzUs-2Bd9byI0xGSoAofag-2BGyEwBilmfMxycIHsY5Kj3KmCA24emjf2-2Baki0m3SWhA-2B9c8-2Be-2FgsMkyo3rAZZg8eIGOK2QQUlHWif4j9gkS7Om8KI-2ByDBkSGA3ImEbjkvIy5cnOO5YkHCdglN2WDHXhPkLEUDKSTwXGr6IF9dakXlk5930VUYoKAbHnMqpavsBY6arq-2FrV7eplnRkCKOGLz8PzhpBJ6fY-2FL5zFdrMAGNyX8DDGpFhe51eYBVA-3D-3D" style="padding:10px;width:300px;display:block;text-decoration:none;border:1px solid #FF6C37;text-align:center;font-weight:bold;font-size:14px;font-family:'Open Sans', sans-serif;color:#ffffff;background:#FF6C37;border-radius:5px;line-height:17px;margin:0 auto;" class="ctaButton">
//                                Reset My Password
//                            </a>
//                        </td>
//                      </tr>
//                      <tr>
//                          <td style="font-family:'Open Sans', sans-serif;font-size:13px;padding:0px 10px 0px 10px;text-align:left;">                    
//                            <p>If you need additional assistance, or you did not make this change, please contact <a href="mailto:help@getpostman.com" style="color:#FF6C37;text-decoration:underline;font-weight: bold;">help@getpostman.com</a>.</p>
//                            <p>Cheers,<br>The Postman Team</p>
//                        </td>
//                    </tr>
//              </table>
//            </td>
//          </tr>
//        </table>
//        <!-- End One Column -->
//        <div style="height:15px;margin:0 auto;"> </div>
//        <!-- spacer -->
       
//        <!-- Begin Footer -->
//        <table width="580" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;">
//          <tr>
//            <td bgcolor="#ffffff" style="font-family:'Open Sans', sans-serif;line-height:150%;padding-top:10px;padding-left:10px;padding-right:18px;padding-bottom:30px;text-align:left;border-bottom:0;font-size:10px;border-top:0;">
       
//              <table width="100%" cellpadding="0" cellspacing="0" border="0" align="left" class="deviceWidth">
//                <tr>
//                  <td valign="top" style="text-align:center;font-size:11px;color:#282828;font-family:'Open Sans', sans-serif;padding:20px 0;padding-left:0px;">
//                    © 2018 Postman Inc., All Rights Reserved <br>
//                    <br>
//                    Our mailing address is: <br>
//                    SmartChip Systems LTD, Rabenu Yeruham St., P.O.B 8401, Yaffo, 6818211, Israel<br>
//                    <br>
       
//                  </td>
//                </tr>
//              </table>
//            </td>
//          </tr>
//        </table>
//        <!-- End Footer -->
//        <!-- End Wrapper -->
//        <div style="display:none;white-space:nowrap;font:15px courier;color:#ffffff;">
//          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//        </div>
       
//        <img src="../public/images/smartchip_logo.jpeg" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;">
//        </body>
//        </html>
       
       
//     `

//     return output;
// }
// module.exports = function (app) {
   
//     app.get('/', (req, res) => {
//         res.render('contact');
//     });

//     app.post('/send', (req, res) => {
//         // const output = `
//         //     <p>You have a new message</p>
//         //     <h3>Reset Password</h3>
//         //     <ul>
//         //         <li>Name: ${req.body.name}</li>
//         //         <li>Company: ${req.body.company}</li>
//         //         <li>Email: ${req.body.email}</li>
//         //         <li>Phone: ${req.body.phone}</li>
//         //     </ul>
//         //     <h3></h3>
//         //     <p>${req.body.message}</p>
//         // `;
//         const output = emailTemplate('amitdr', '12345678');

//         //Nodemailer
//         // create reusable transporter object using the default SMTP transport
//         let transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 465,
//             secure: true, // true for 465, false for other ports
//             auth: {
//                 user: 'smart.chip.system.ltd@gmail.com', // generated ethereal user
//                 pass: 'Backend123456' // generated ethereal password
//             },
//             tls: {
//                 rejectUnauthorized: false
//             }
//         });

//         // setup email data with unicode symbols
//         function mailOptions() {
//             return mailOptions = {
//                 from: '"Smart Chip 👻" <smart.chip.system.ltd@gmail.com>', // sender address
//                 to: 'amitdr@mta.ac.il',//'bar@example.com, baz@example.com', // list of receivers
//                 subject: 'Reset Password Request ✔', // Subject line
//                 text: 'This is a temporarly password', // plain text body
//                 html: output // html body
//             };
//         }

//         // send mail with defined transport object
//         transporter.sendMail(mailOptions(), (error, info) => {
//             if (error) {
//                 return console.log(error);
//             }
//             console.log('Message sent: %s', info.messageId);
//             // Preview only available when sending through an Ethereal account
//             console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//             // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//             // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

//             res.render('contact', { msg: 'Email has been sent' });
//         });


//     });
// }
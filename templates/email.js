


function contactTemplate(text) {
  return `
  <p>${text}</p>
        `;
}

function passwordTemplate(newPassword) {
  return emailTemplate = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Smart Chip - Reset Password Request</title>
  <link href="https://fonts.googleapis.com/css?family=Open&#43;Sans:400,600,700" rel="stylesheet">

  <style type="text/css">
    .ReadMsgBody {
      width: 100%;
      background-color: #ffffff;
    }

    .ExternalClass {
      width: 100%;
      background-color: #ffffff;
    }

    body {
      width: 100%;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      font-family: Georgia, Times, serif;
    }

    table {
      border-collapse: collapse;
    }

    @media only screen and (max-width: 640px) {
      .deviceWidth {
        width: 440px !important;
        padding: 0;
      }

    }

    @media only screen and (max-width: 640px) {
      .ImageWidth {
        width: 50px !important;
        padding: 0;
        margin: auto;
      }

    }

    @media only screen and (max-width: 640px) {
      .center {
        text-align: center !important;
        margin: auto;
      }

    }

    @media only screen and (max-width: 479px) {
      .deviceWidth {
        width: 280px !important;
        padding: 0;
      }

    }

    @media only screen and (max-width: 479px) {
      .ImageWidth {
        width: 50px !important;
        padding: 0;
        margin: auto;
      }

    }

    @media only screen and (max-width: 479px) {
      .center {
        text-align: center !important;
        margin: auto;
      }

    }

    .container {
      width: 100% !important;
      min-width: 100% !important;
      height: auto !important;
    }
  </style>
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="font-family: 'Open Sans', sans-serif;">
  <!-- Wrapper -->
  <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="container" style="min-width:640px;">
    <tr>
      <td width="100%" valign="top" bgcolor="#ffffff" style="padding-top:20px;">

        <!-- One Column -->
        <table width="580" class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff"
          style="margin:0 auto;">
          <tr>
            <td valign="top" align="center" style="padding:0;" bgcolor="#ffffff">
              <!-- <img class="deviceWidth" src="public/images/smartchip_logo.jpeg" alt="" border="0" width="125" style="display: block;"> -->
              </a>
            </td>
          </tr>
          <tr>
            <td style="font-size:13px;color:#282828;font-weight:normal;text-align:left;font-family:'Open Sans', sans-serif;line-height:24px;vertical-align:top;padding:15px 8px 10px 8px;"
              bgcolor="#ffffff">
              <h1 style="text-align:center;font-weight:600;margin:30px 0 50px 0;">PASSWORD RESET REQUEST</h1>
              <p>Dear SmartChip User,</p>
              <p>We have received your request to reset your password.</p>
              <p>Your temporarily password is below, you can change it through your App:</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:30px;">
              <a href="" style="padding:10px;width:300px;display:block;text-decoration:none;border:1px solid #FF6C37;text-align:center;font-weight:bold;font-size:14px;font-family:'Open Sans', sans-serif;color:#ffffff;background:#FF6C37;border-radius:5px;line-height:17px;margin:0 auto;" class="ctaButton">
              ${newPassword}
              </a>
              
            </td>
          </tr>
          <tr>
            <td style="font-family:'Open Sans', sans-serif;font-size:13px;padding:0px 10px 0px 10px;text-align:left;">
              <p>If you need additional assistance, or you did not make this change, please contact <a href="mailto:smart.chip.info@gmail.com"
                  style="color:#FF6C37;text-decoration:underline;font-weight: bold;">smart.chip.info@gmail.com</a>.</p>
              <p>Cheers,<br>The SmartChip Team</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <!-- End One Column -->
  <div style="height:15px;margin:0 auto;"> </div>
  <!-- spacer -->

  <!-- Begin Footer -->
  <table width="580" border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth" style="margin:0 auto;">
    <tr>
      <td bgcolor="#ffffff" style="font-family:'Open Sans', sans-serif;line-height:150%;padding-top:10px;padding-left:10px;padding-right:18px;padding-bottom:30px;text-align:left;border-bottom:0;font-size:10px;border-top:0;">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" align="left" class="deviceWidth">
          <tr>
            <td valign="top" style="text-align:center;font-size:11px;color:#282828;font-family:'Open Sans', sans-serif;padding:20px 0;padding-left:0px;">
              © 2018 SmartChip Inc., All Rights Reserved <br>
              <br>
              Our mailing address is: <br>
              The Academic College of Tel Aviv-Yaffo, 20 Rabenu Yeruham St., Yaffo, Israel<br>
              <br>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <!-- End Footer -->
  <!-- End Wrapper -->
  <div style="display:none;white-space:nowrap;font:15px courier;color:#ffffff;">
    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  </div>

  <!-- <img src="../public/images/smartchip_logo.jpeg" alt="" width="1" height="1" border="0" style="height:1px !important;width:1px !important;border-width:0 !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;"> -->
</body>

</html>
`;
}


module.exports.passwordTemplate = passwordTemplate;
module.exports.contactTemplate = contactTemplate;
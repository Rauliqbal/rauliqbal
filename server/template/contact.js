const htmlContact = (name, email, subject, details) =>
  `<!DOCTYPE html>
<html lang="en">
   <head>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
         href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
         rel="stylesheet"
      />
   </head
   <body
      style="
         background-color: #F7F8F9;
         box-sizing: border-box;
         font-family: 'Poppins', sans-serif;
         margin: 0; padding: 0;
      "
   >
      <table style="width: 100%;
      min-width: 100%; padding-top: 24px;">
      
         <tr>
            <td style="display: block;
            max-width: 500px;
            margin: 0 auto;
            padding: 0 16px;">
               <div style=" background-color: #ffffff;
               border-radius: 14px;
               box-shadow: -2px 6px 26px 2px rgba(214, 214, 214, 0.18);
               -webkit-box-shadow: -2px 6px 26px 2px rgba(214, 214, 214, 0.18);
               -moz-box-shadow: -2px 6px 26px 2px rgba(214, 214, 214, 0.18);">
                  <table style="padding: 24px 16px;">
                     <tr>
                        <td>
                           <h1 style="font-size: 24px;
                           padding-bottom: 14px; padding-top: 0px;" align="center">Hi!, Muhamad Raul Iqbal 👋</h1>
                           <p style="font-size: 16px;">
                              Seseorang baru saja mengirimkan pesan dari
                              <a href="https://rauliqbal.my.id"
                                 >Website Portfolio</a
                              >, ini kata beliau :
                           </p>

                           
                           <p style="color: #929292 ; margin: 26px 0 0 0; font-size: 16px; font-weight: 500;">Nama :</p>
                           <p style="margin: 8px 0 0 0; font-size: 14px;">${name}</p>
                           
                           <p style="color: #929292 ; margin: 26px 0 0 0; font-size: 16px; font-weight: 500;">Email:</p>
                           <p style="margin: 8px 0 0 0; font-size: 14px;">${email}</p>
                           
                           <p style="color: #929292 ; margin: 26px 0 0 0; font-size: 16px; font-weight: 500;">Subject:</p>
                           <p style="margin: 8px 0 0 0; font-size: 14px;">${subject}</p>
                           
                           <p style="color: #929292 ; margin: 26px 0 0 0; font-size: 16px; font-weight: 500;">Pesan:</p>
                           <p style="margin: 8px 0 0 0; font-size: 14px;">
                           ${details}
                           </p>
                           
                        </td>
                     </tr>
                  </table>
               </div>
               
            </td>
         </tr>
      </table>
      <table style="padding-top: 16px; width: 100%;
                  min-width: 100%;padding-bottom: 24px;">
                     <tr>
                        <td
                           align="center"
                           style="color: #7c7c7c; padding-bottom: 16px"
                        >
                           © 2021 - 2024, Rauliqbal
                        </td>
                     </tr>
                     <tr>
                        <td align="center">
                           <span style="font-size: 14px; color: #7c7c7c"
                              >Powered By Exress JS + Nodemailer</span
                           >
                        </td>
                     </tr>
                  </table>
   </body>
</html>
`;

export default htmlContact;

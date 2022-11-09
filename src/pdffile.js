const createPDF5008 = async () => {
  if (await isPermitted()) {
    let options = {
      //Content to print
      html: `
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
   
    </style>
</head>
<body style="text-align: center;">
    <h1>Modern Coach Factory Raebareli <br> SELF INSPECTION PROFORMA (FIAT BOGIE /EOG WITH AIR SPRING)</h1>
<table width="100%" border="1px">
      <tr  style="padding: 2px;">
      <th width="200" bgcolor="lightgrey">BOGIE STAGE</th>
      <td width="200" >STATIC TESTING</td>
      <th width="200" bgcolor="lightgrey">BOGIE TYPE& NO</th>
      <td width="200" >MCF/RBL/QMF 5008</td>
        
    </tr>
    <tr >
      <tr>
          <tr >
            <th bgcolor="lightgrey">Date</th>
            <td >19/10/2022</td>
            <th bgcolor="lightgrey" >FORM NO.</th>
            <td >MCF/RBL/QMF-5016</td>
          </tr>
        
        <tr>
          <th bgcolor="lightgrey">SHIFT</th>
          <td >${value1}</td>
          <th bgcolor="lightgrey">VERSION</th>
          <td >07/2019</td>
        </tr>
      </tr>       
    </tr>
   
</table>

<table width="100%" style="margin-top: 3vh;" border="1px">
  
  <tr  style="padding: 2px;">
  <th width="200" bgcolor="lightgrey">Drawing No</th>
  <td width="200" >LW90033 Alt-b</td>
  <th width="200" bgcolor="lightgrey">W.I  No</th>
  <td width="200" >${value2}</td>
   
</tr>
<tr >
  <tr>
      <tr >
        <th bgcolor="lightgrey">FRAME NO.& MAKE.</th>
        <td >${value3}</td>
        <th bgcolor="lightgrey" >Cross Section No.</th>
        <td >FORGE</td>
      </tr>
    
    <tr>
      <th bgcolor="lightgrey">Wheel Axle No.(PA/NPA)</th>
      <td >${value4}</td>
      <th bgcolor="lightgrey">Brake Cylinder No & Make</th>
      <td >${value5}</td>
    </tr>
  </tr>       
</tr>

<tr >
  <tr>
      <tr >
        <th bgcolor="lightgrey">Brake Cylinder No.1</th>
        <td >${value6}</td>
        <th bgcolor="lightgrey" >Brake Caliper No.1</th>
        <td >${value7}</td>
      </tr>
    
      <tr >
      <th bgcolor="lightgrey">Brake Cylinder No.2</th>
      <td >${value6}</td>
      <th bgcolor="lightgrey" >Brake Caliper No.2</th>
      <td >${value7}</td>
    </tr>
  </tr>       
</tr>

<tr >
  <tr>
      <tr >
        <th bgcolor="lightgrey">Brake Cylinder No.3</th>
        <td >${value6}</td>
        <th bgcolor="lightgrey" >Brake Caliper No.3</th>
        <td >${value7}</td>
      </tr>
    
      <tr >
      <th bgcolor="lightgrey">Brake Cylinder No.4</th>
      <td >${value6}</td>
      <th bgcolor="lightgrey" >Brake Caliper No.4</th>
      <td >${value7}</td>
    </tr>
  </tr>       
</tr>

<tr >
  <tr>
      <tr >
        <th bgcolor="lightgrey">Bolster No & Make</th>
        <td >${value9}</td>
        <th bgcolor="lightgrey" >Secondary air spring No & Make</th>
        <td >${value9}</td>
      </tr>
  </tr>       
</tr>

</table>

<table width="100%" style="margin-top: 3vh;" border="1px">
<tr>
<tr >
  <th bgcolor="lightgrey">Primary & Secondary suspension spring color coding</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Anti roll bar assembly with screws,spring washer & security plate</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment Longitudinal stop assembly</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Traction Lever joint with  Disc & nut</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Lateral dampers bkt. on cross section with Disc & screws</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Lateral dampers with Disc, nut & screws</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of secondary vertical dampers with Disc,screws & nut</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Cross section with distance bush, Disc & screw</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of lateral bump stop with shim, punch washer, screw & nut</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment on Control Arm top with bottom with disc, screw & nut</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Axle end cover with control arm with disc, screw & nut</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Control Arm with control arm Bkt</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Primary Shock absorbers</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of traction centre with pivot pin with silent block,disc,safety plate,screw & nut</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of primary bump stop with centering disc & nut</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of roll link on roll link bkt</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Locking plate on Bracket control arm assembly</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Security plate and locking plate on axle with Disc & screw</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Rubber spring with Socket head</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">No. Plate of Shock Absorber should be in front</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">All Cotter should be Splited properly</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">All Nut, Bolts & Screws should be properly tightened</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Welding of Bogie No. Plate and Bogie number punched properly</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Painting  of complete Bogie</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Checking of pipes for any leakage by soap foam (check visually)</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Brake cylinders /caliper with disc, screw & nut</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of phonic wheel</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Fitment of Air Pipes with clamps and screws etc</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Movement of Brake rigging should be free</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Visually checked of all Rubber items should not be Painted</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">Visually checked of all ball joints for crack</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

<tr >
  <th bgcolor="lightgrey">All four side control arm locking pin visually checked for crack</th>
  <td >${value3}</td>
  <th bgcolor="lightgrey" >Actual</th>
  <td >ok/not ok</td>
  <th bgcolor="lightgrey" >Remark</th>
  <td >Remark Likh denge  idher</td>
</tr>

</tr>       
</tr>


</table>






<h3 style="margin-top: 5px;">Confirming / Non Confirming</h3>

<div style="display: flex; padding: 20px;"> 
  <div style=" padding: 20px; margin-right: 50%;">
    <h4>Signature of In Charge</h4>
    <div style="display: flex;">
      <h3>Name:</h3>
      <p>______</p>
    </div>
    <div style="display: flex;">
      <h3>Desgnation:</h3>
      <p>______</p>
    </div>
  </div>

  <div >
    <h4>Signature of Stage supervisor</h4>
    <div style="display: flex;padding: 20px; ">
      <h3>Name:</h3>
      <p>______</p>
    </div>
    <div style="display: flex;">
      <h3>Desgnation:</h3>
      <p>______</p>
    </div>
  </div>
  <div>

  </div>
</div>
</body>
</html>`,
      //File Name
      fileName: 'M5008',
      //File directory
      directory: 'docs',
    };
    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
    setFilePath(file.filePath);
    ToastAndroid.show(`M5008 Form Downloaded in ${filePath}`, 2000);
  }
};

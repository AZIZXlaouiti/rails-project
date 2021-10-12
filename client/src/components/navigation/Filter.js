// import React from 'react'

// const Filter = () => {
//     return (
//         <div>
//           body {
//   font-family: "Montserrat", sans-serif;

//   font-style: normal;
//   margin: 0;
//   padding: 0;
//   background-color: #f8f5f4;
//   box-sizing: border-box;
//   cursor: default;
// }
// .sidebar {
//   display: flex;
//   align-items: center;
// }
// .sidebar-link {
//   padding-left: 1rem;
//   padding-right: 1rem;
  
// }
  
// header {
//   background-color: white;
//   box-shadow: 0 1px 0 0 rgb(0 11 38 / 12%);
//   position: relative;
//   width: 100%;
//   z-index: 300;
//   padding: 9px 16px;

// }
// .nav-header {
//   display: flex;
//   justify-content: space-around;
// }
// p{
//   margin: 0;
// }
// input{
//   margin: 10px 20px 10px 20px;
//   padding: 5px 10px;
//   /* border-radius: 10px; */
//   color: #aaa7aa;
//   font-size: 16px;
//   border: 1px solid #d0cdd0;
//   background-color: rgba(208,205,208,0.3);
//   height: 52%;
// }

//  .main{
//   height: 100%;
//   display: flex;
//   border: 1px solid;
 
// }
// .btn-container{
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   grid-area: 5/1/6/1;
// }

// .btn {
//   border: none;
//   border-radius: 50%;
//   padding: 15px;
//   height: 50px;
//   width: 50px;
//   color: #FFF;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   background-image: linear-gradient(
// 90deg, #ff3d97 65%, #ff1c82 100%);
// }
// img{
//   margin: 0 10px;
//   object-fit: cover;
//   border-radius: 15px;
//   cursor: pointer;
//   transition: .25s ease-in-out;
//   width: 286px;
//   /* height: 100%; */
// }
  

// .img-card{
//   display: flex;
//   height: 350px;
//   overflow-y: hidden;
//   overflow-x: scroll !important;
//   scroll-behavior: smooth;
  
// }
// .img-card::after{
//   position: absolute;
//   width: 223px;
//   height: 54px;
//   left: 0px;
//   top: 215px;
  
  
  
//   background: #FFFFFF;
//   opacity: 0.9;
//   border-radius: 0px 0px 8px 8px;
// }
// .img-over{
//   bottom: 1.875rem;
//   color: white;
//   left: .75rem;
//   position: absolute;
//   z-index: 10000;
// }
// .name {
//   font-size: 1.375rem;
//   font-weight: 600;
//   line-height: 1.1;
// }

// .nav{
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   flex-wrap: nowrap;
//   padding: 20px 35px;
//   z-index: 200000;
// }
// .filter-type{
//   width: 270px;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   flex-shrink: 0;
// }

// input[type="radio"]{
//   display: none;
// }
// input[type="radio"]:checked + label:before {
//    background-color:#0162ff;
//    border-color:#0162ff;
//    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e");
//    background-position: 50%;
//    background-size: 14px;
//    background-repeat: no-repeat;
// }
//  label{
//         margin-left: 2px;
//         display: flex;
//         align-items: center;
//         cursor: pointer;
//     }
   
//     label::before{
//         content: "";
//         margin-right: 10px;
//         width: 16px;
//         height: 16px;
//         border: 1px solid #0162ff;
//         border-radius: 4px;
//         cursor: pointer;
//     }

//     input[type='range'] {
//       width: 210px;
//       height: 30px;
//       overflow: hidden;
//       cursor: pointer;
//         outline: none;
//     }
//     input[type='range'],
//     input[type='range']::-webkit-slider-runnable-track,
//     input[type='range']::-webkit-slider-thumb {
//       -webkit-appearance: none;
//         background: none;
//     }
//     input[type='range']::-webkit-slider-runnable-track {
//       width: 200px;
//       height: 1px;
//       background: #003D7C;
//     }
    
//     input[type='range']:nth-child(2)::-webkit-slider-runnable-track{
//       background: none;
//     }
    
//     input[type='range']::-webkit-slider-thumb {
//       position: relative;
//       height: 15px;
//       width: 15px;
//       margin-top: -7px;
//       background: #fff;
//       border: 1px solid #003D7C;
//       border-radius: 25px;
//       z-index: 1;
//     }
    
    
//     input[type='range']:nth-child(1)::-webkit-slider-thumb{
//       z-index: 2;
//     }
    
//     .rangeslider{
//         position: relative;
//         height: 60px;
//         width: 210px;
//         display: inline-block;
//         margin-top: -5px;
//         margin-left: 20px;
//     }
//     .rangeslider input{
//         position: absolute;
//     }
//     /* .rangeslider{
//         position: absolute;
//     } */
    
//     .rangeslider span{
//         position: absolute;
//         margin-top: 30px;
//         left: 0;
//     }
    
//     .rangeslider .right{
//        position: relative;
//        float: right;
//        margin-right: -5px;
//     }
    
    
//     /* Proof of concept for Firefox */
//     @-moz-document url-prefix() {
//       .rangeslider::before{
//         content:'';
//         width:100%;
//         height:2px;
//         background: #003D7C;
//         display:block;
//         position: relative;
//         top:16px;
//       }
    
//       input[type='range']:nth-child(1){
//         position:absolute;
//         top:35px !important;
//         overflow:visible !important;
//         height:0;
//       }
    
//       input[type='range']:nth-child(2){
//         position:absolute;
//         top:35px !important;
//         overflow:visible !important;
//         height:0;
//       }
//     input[type='range']::-moz-range-thumb {
//       position: relative;
//       height: 15px;
//       width: 15px;
//       margin-top: -7px;
//       background: #fff;
//       border: 1px solid #003D7C;
//       border-radius: 25px;
//       z-index: 1;
//     }
    
//       input[type='range']:nth-child(1)::-moz-range-thumb {
//           transform: translateY(-20px);    
//       }
//       input[type='range']:nth-child(2)::-moz-range-thumb {
//           transform: translateY(-20px);    
//       }
//     }
//     .setting{
//         position: absolute;
//         left: 0%;
//         right: -1.22%;
//         top: 0%;
//         bottom: 0%;

//         background: #FFFFFF;
//         box-shadow: inset 0px 1px 0px rgba(229, 229, 229, 0.5), inset 0px -1px 0px rgba(229, 229, 229, 0.653278);
//     }

//         </div>
//     )
// }

// export default Filter

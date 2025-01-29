// import { Box } from "@mui/system";
// import { Avatar, Flex, Splitter, Typography } from "antd";
// import React, { Fragment } from "react";

// const Desc = (props) => (
//   <Flex
//     justify="center"
//     align="center"
//     style={{
//       height: "100%",
//     }}
//   >
//     <Typography.Title
//       type="secondary"
//       level={5}
//       style={{
//         whiteSpace: "nowrap",
//       }}
//     >
//       {props.text}
//     </Typography.Title>
//   </Flex>
// );
// const TypoText = (props) => (
//   <Typography.Title
//     level={props.level}
//     type={props.type}
//     style={{ color: props.color, fontSize: props.fontSize ,padding:"5px"}}
//   >
//     {props.text}
//   </Typography.Title>
// );
// const TankAvatar = (props) => (
//   <Flex
//     justify="center"
//     align="center"
//     style={{
//       height: "100%",
//     }}
//   >
//     <Flex
//       style={{
//         flexDirection: "column",
//         justifyContent: "center",
//         padding: "10px",
//         height: "100%",
//         alignItems: "baseline",
//       }}
//     >
//       <TypoText text={props.s} type="secondary" fontSize="14px" />
//       <TypoText text={props.f} type="secondary" fontSize="14px" />
//       <TypoText text={props.r} type="secondary" fontSize="14px" />
//     </Flex>
//     <Avatar
//       shape="square"
//       size={100}
//       style={{
//         fontWeight: "bold",
//                 borderRadius: "25px",
//         backgroundColor: "#f56a00",
//         // backgroundColor: " rgba( 255, 255, 255, 0.3 )",
// border: "1px solid #f56a00",
// borderRadius: "16px ",
// boxShadow: "10px 20px 30px #f56a00",

//       }}
//     >
//       <TypoText text={props.text} color="black" />
//     </Avatar>
//   </Flex>
// );
// export function FusCards() {
//   return (
//     <Fragment>
//       <Splitter
//         style={{
//           height: 200,
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Splitter.Panel defaultSize="25%" min="20%" max="70%">
//         <TankAvatar text="16" s="SERVICE"/>
//         </Splitter.Panel>
//         <Splitter.Panel defaultSize="25%" min="20%" max="70%">
//         <TankAvatar text="17" s="SERVICE" f="SERVICE" r="SERVICE" />
//         </Splitter.Panel>
//         <Splitter.Panel defaultSize="25%" min="20%" max="70%">
//         <TankAvatar text="14" />
//         </Splitter.Panel>
//         <Splitter.Panel defaultSize="25%" min="20%" max="70%">
//           <TankAvatar text="15" />
//         </Splitter.Panel>
//       </Splitter>
//     </Fragment>
//   );
// }

// export default FusCards;

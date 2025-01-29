// import Box from "@mui/material/Box";
// import { alpha } from "@mui/material/styles";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import { Avatar, Card, Flex, Image, List } from "antd";
// import { useSettingsContext } from "src/components/settings";
// import { _fuelTanks } from "src/_mock";
// import { Text } from "@react-pdf/renderer";
// import FusCards from "src/components/cards/FusCards";


// // ----------------------------------------------------------------------

// const data = [
//   {
//     title: "Title 1",
//   },
//   {
//     title: "Title 2",
//   },
//   {
//     title: "Title 3",
//   },
//   {
//     title: "Title 4",
//   },
//   {
//     title: "Title 5",
//   },
//   {
//     title: "Title 6",
//   },
// ];
// export default function FusView() {
//   const settings = useSettingsContext();

//   return (
//     <Container maxWidth={settings.themeStretch ? false : "xl"}>
//       <Typography variant="h4"> Fus </Typography>

//       <Box
//         sx={{
//           mt: 5,
//           width: 1,
//           // height: 320,
//           padding: 3,
//           borderRadius: 2,
//           // bgcolor: (theme) => alpha(theme.palette.grey[700], 0.04),
//           // border: (theme) => `dashed 1px ${theme.palette.divider}`,
//         }}
//       >
//         {/* <List
//     grid={{
//       gutter: 16,
//       xs: 1,
//       sm: 2,
//       md: 4,
//       lg: 4,
//       xl: 6,
//       xxl: 3,
//     }}
//     dataSource={_fuelTanks}
//     renderItem={(item) => (
//       <List.Item>
//         <Card title={item.tankName}>{item.tankNumber}</Card>
//       </List.Item>
//     )}
//   /> */}
// <FusCards />
//         {/* <Flex
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             padding: "20px",
//             height: "345px",
//             width: "315px",
//             alignItems: "center",
//             borderRadius: "20px",
//             backgroundColor: "white",
//           }}
//         >
//           <Image
//             src="https://i.ibb.co/xmP2pS6/Profile.png"
//           preview={false}
//             style={{ borderRadius: "20px" , maxW:"100%",}}
//           />
//           <Flex style={{flexDirection:"column" ,mb:"30px", position: "relative",alignItems: "center",
//                 bottom: "15px",}} >
//             <Avatar
//               src="https://i.ibb.co/B3gYTYs/Profile-Image.png"
//               style={{
//                 border: "5px solid white",
               

//                 borderColor: "white",
//                 width: "68px",
//                 height: "68px",
               
//                 borderRadius: "50%",
//               }}
//             />
//             <Typography
//               sx={{
//                 fontWeight: "600",
//                 color: "black",
//                 textAlign: "center",
//                 fontSize: "xl",
//               }}
//             >
//               Adela Parkson
//             </Typography>
//             <Typography
//               color="black"
//               textAlign="center"
//               fontSize="sm"
//               fontWeight="500"
//             >
//               Product Designer
//             </Typography>
//           </Flex>
//           <Flex style={{
//             display: "flex",
//             justifyContent: "space-between",
//             width: "100%",
//           }} justify="space-between" w="100%" px="36px">
//             <Flex style={{
//               flexDirection:"column"
//             }} >
//               <Typography
//                 fontWeight="600"
//                 color="black"
//                 fontSize="xl"
//                 textAlign="center"
//               >
//                 17
//               </Typography>
//               <Typography color="black" fontWeight="500">
//                 Posts
//               </Typography>
//             </Flex>
//             <Flex style={{
//               flexDirection:"column"
//             }} >
//               <Typography
//                 fontWeight="600"
//                 color="black"
//                 fontSize="xl"
//                 textAlign="center"
//               >
//                 9.7k
//               </Typography>
//               <Typography color="black" fontWeight="500">
//                 Followers
//               </Typography>
//             </Flex>
//             <Flex style={{
//               flexDirection:"column"
//             }} >
//               <Typography
//                 fontWeight="600"
//                 fontSize="xl"
//                 color="black"
//                 textAlign="center"
//               >
//                 274
//               </Typography>
//               <Typography color="black" fontWeight="500">
//                 Following
//               </Typography>
//             </Flex>
//           </Flex>
//         </Flex> */}
//       </Box>
//     </Container>
//   );
// }

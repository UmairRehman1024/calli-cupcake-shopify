import { ImageResponse } from 'next/og';
import LogoIcon from './icons/logo';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(props?: Props): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME
    },
    ...props
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-[#ffe7e7]">
        {/* <div tw="flex flex-none items-center justify-center  h-[160px] w-[160px] "> */}
        <LogoIcon width={600} height={600} fill="#5f1006" />
        {/* </div> */}
        {/* <p tw="mt-12 text-6xl font-bold text-[#5f1006]">{title}</p> */}
      </div>
    ),
    {
      width: 1200,
      height: 630
      // fonts: [
      //   {
      //     name: 'Inter',
      //     data: await fetch(new URL('../fonts/Inter-Bold.ttf', import.meta.url)).then((res) =>
      //       res.arrayBuffer()
      //     ),
      //     style: 'normal',
      //     weight: 700
      //   }
      // ]
    }
  );
}

// import { ImageResponse } from 'next/og';
// import Logo from './icons/logo';

// export type Props = {
//   title?: string;
//   subtitle?: string;
// };

// export default async function OpengraphImage(props?: Props): Promise<ImageResponse> {
//   const { title, subtitle } = {
//     ...{
//       title: 'The Calligraphy Cupcake',
//       subtitle: 'Gluten & Dairy-Free Cupcakes | Handwritten Calligraphy'
//     },
//     ...props
//   };

//   // Load fonts
//   const interBold = await fetch(new URL('../fonts/Inter-Bold.ttf', import.meta.url)).then((res) =>
//     res.arrayBuffer()
//   );

//   const interMedium = await fetch(new URL('../fonts/Inter-Medium.ttf', import.meta.url)).then(
//     (res) => res.arrayBuffer()
//   );
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '100%',
//           height: '100%',
//           backgroundColor: '#ffe7e7',
//           padding: '40px 20px',
//           position: 'relative'
//         }}
//       >
//         {/* Bottom decoration - placing it first to avoid nesting issues */}
//         <div
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: '48px',
//             backgroundColor: '#5f1006'
//           }}
//         />

//         {/* Logo */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: '180px',
//             height: '180px',
//             borderRadius: '90px',
//             border: '4px solid #5f1006',
//             backgroundColor: 'white',
//             marginBottom: '32px'
//           }}
//         >
//           <Logo width="120" height="120" fill="#5f1006" />
//         </div>

//         {/* Title */}
//         <div
//           style={{
//             fontSize: '60px',
//             fontWeight: 'bold',
//             color: '#5f1006',
//             textAlign: 'center',
//             marginBottom: '16px'
//           }}
//         >
//           {title}
//         </div>

//         {/* Subtitle */}
//         <div
//           style={{
//             fontSize: '24px',
//             fontWeight: 'medium',
//             color: '#5f1006',
//             textAlign: 'center',
//             maxWidth: '800px'
//           }}
//         >
//           {subtitle}
//         </div>

//         {/* Left icon - placed directly in main container */}
//         <div
//           style={{
//             position: 'absolute',
//             top: '32px',
//             left: '32px',
//             width: '64px',
//             height: '64px'
//           }}
//         >
//           <svg
//             width="64"
//             height="64"
//             viewBox="0 0 50 50"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M15 25C15 20 20 15 25 15C30 15 35 20 35 25V30H15V25Z"
//               fill="white"
//               stroke="#5f1006"
//               strokeWidth="2"
//             />
//             <rect x="17" y="30" width="16" height="10" rx="2" fill="#5f1006" />
//             <circle cx="25" cy="12" r="3" fill="#5f1006" />
//           </svg>
//         </div>

//         {/* Right icon - placed directly in main container */}
//         <div
//           style={{
//             position: 'absolute',
//             top: '32px',
//             right: '32px',
//             width: '64px',
//             height: '64px'
//           }}
//         >
//           <svg
//             width="64"
//             height="64"
//             viewBox="0 0 50 50"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M10 40L40 10M40 10H30M40 10V20"
//               stroke="#5f1006"
//               strokeWidth="3"
//               strokeLinecap="round"
//             />
//             <path d="M10 40L15 35L15 45L10 40Z" fill="#5f1006" />
//           </svg>
//         </div>
//       </div>
//     ),
//     {
//       width: 1200,
//       height: 630,
//       fonts: [
//         {
//           name: 'Inter',
//           data: interBold,
//           style: 'normal',
//           weight: 700
//         },
//         {
//           name: 'Inter',
//           data: interMedium,
//           style: 'normal',
//           weight: 500
//         }
//       ]
//     }
//   );
// }

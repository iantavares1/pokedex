// import styled from '@emotion/styled'

// export const Container = styled.div<{ bg: string }>`
//   position: fixed;
//   z-index: 999;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 100vw;
//   background: ${({ bg }) => bg};
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 460px) {
//     position: relative;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 90%;
//     height: 40%;
//     border-radius: 1rem;
//     display: grid;
//     align-items: start;
//     grid-template-rows: 1fr 6fr;
//     grid-template-columns: 50% 50%;
//     overflow: hidden;
//   }
//   @media (min-width: 560px) {
//     width: 26rem;
//     zoom: 1.2;
//   }
//   @media (min-width: 748px) {
//     width: 30rem;
//     height: 15rem;
//     zoom: 1.4;
//   }
//   @media (min-width: 1024px) {
//     zoom: 1.6;
//   }
// `

// export const Header = styled.header`
//   min-width: 100%;
//   padding: 1.55rem 1rem 0;
//   display: flex;
//   justify-content: space-between;
//   @media (min-width: 460px) {
//     grid-column: 1;
//     grid-row: 1;
//     padding: 1rem 1rem 0;
//   }
// `

// export const Button = styled.button`
//   all: unset;
//   display: flex;
//   cursor: pointer;
// `

// export const Info = styled.div`
//   width: 100%;
//   padding: 1rem;
//   display: grid;
//   align-items: center;
//   h1 {
//     margin: 0;
//     font-size: 2rem;
//     @media (min-width: 460px) {
//       font-size: 1.5rem;
//     }
//   }
//   @media (min-width: 460px) {
//     grid-row: 2;
//     grid-column: 1;
//     padding: 1rem 0.6rem;
//   }
// `

// export const Type = styled.span<{ bg: string }>`
//   width: fit-content;
//   padding: 0.2rem 1rem;
//   border-radius: 1rem;
//   background: ${({ bg }) => bg};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media (min-width: 460px) {
//     font-size: 0.6rem;
//   }
// `

// export const ImgWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 10rem;

//   img {
//     position: absolute;
//     z-index: 999;
//     height: 9rem;
//     width: 9rem;
//     top: -2rem;
//     left: 50%;
//     transform: translateX(-50%);
//     @media (min-width: 460px) {
//       transform: translate(0);
//       top: initial;
//       left: initial;
//       bottom: 1rem;
//       right: 0;
//       height: 7rem;
//       width: 7rem;
//     }
//   }
//   @media (min-width: 460px) {
//     grid-row: 2;
//     grid-column: 1;
//     height: 100%;
//   }
// `

// export const Main = styled.main`
//   width: 100%;
//   height: 100%;
//   padding: 1rem;
//   border-top-right-radius: 1.5rem;
//   border-top-left-radius: 1.5rem;
//   background: #222;
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 460px) {
//     grid-row: 1/3;
//     grid-column: 2;
//     border-radius: initial;
//     padding: 0.5rem 1rem;
//   }
// `

// export const SectionButton = styled.button<{ isactive?: 'y' | 'n' }>`
//   all: unset;
//   font-size: 0.8rem;
//   cursor: pointer;
//   ${({ isactive }) =>
//     isactive === 'y' &&
//     `
//     font-weight: bold;
//     border-bottom: .3rem solid;
//   `}
// `

// export const Section = styled.section`
//   padding: 1rem 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   @media (min-width: 460px) {
//     font-size: 0.5rem;
//     gap: 0.8rem;
//   }
//   @media (min-width: 748px) {
//     gap: initial;
//     justify-content: space-between;
//   }
// `

// export const Metrics = styled.div`
//   display: flex;
//   gap: 0.4rem;
//   font-size: 0.8rem;
//   @media (min-width: 460px) {
//     font-size: 0.6rem;
//   }
// `

// export const StatBarWrapper = styled.div`
//   margin-left: 1.5rem;
//   position: relative;
//   border-radius: 1rem;
//   overflow: hidden;

//   width: 70%;
//   height: 0.6rem;
//   @media (min-width: 460px) {
//     height: 0.4rem;
//   }
// `

// export const StatBar = styled.div<{ w: string; animation?: 'y' | 'n' }>`
//   position: absolute;
//   height: 100%;
//   width: calc(${({ w }) => w});
//   background: #fff;

//   ${({ animation }) =>
//     animation === 'y'
//       ? `
//     animation: bar-animation 0.6s linear;
//   `
//       : `opacity: 0.1;`}

//   @keyframes bar-animation {
//     from {
//       width: 0;
//     }
//     to {
//       ${({ w }) => w};
//     }
//   }
// `

import "./app.scss";
import ComingSoon from "./components/comingSoon/ComingSoon";

// COMING SOON MODE - Uncomment below and comment out ComingSoon to restore site
// import { Routes, Route } from "react-router-dom";
// import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
// import Hero from "./components/hero/Hero";
// import ClipPathTransition from "./components/clippathtransition/ClipPathTransition";
// import CaseStudies from "./components/caseStudies/CaseStudies";
// import AIPlaybookPage from "./pages/AIPlaybookPage";

// const MainPage = () => {
//   return (
//     <>
//       <section id="Homepage">
//         <Hero />
//       </section>
//       <section id="Experience">
//         <ClipPathTransition />
//       </section>
//       <section id="CaseStudies">
//         <CaseStudies />
//       </section>
//       <section id="Contact">
//         <Contact />
//       </section>
//     </>
//   );
// };

const App = () => {
  return <ComingSoon />;

  // ORIGINAL APP - Uncomment to restore:
  // return (
  //   <div>
  //     <Cursor />
  //     <Routes>
  //       <Route path="/" element={<MainPage />} />
  //       <Route path="/ai-playbook" element={<AIPlaybookPage />} />
  //     </Routes>
  //   </div>
  // );
};

export default App;

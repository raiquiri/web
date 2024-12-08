import AdminHeader from "../../components/admin/AdminHeader";
import AdminHero from "../../components/admin/AdminHero";
import AdminBrands from "../../components/admin/AdminBrands";
import AdminFutureHere from "../../components/admin/AdminFutureHere";
import AdminWhatIsChatGpt from "../../components/admin/AdminWhatIsChatGpt";
import AdminWoman from "../../components/admin/AdminWoman";
import AdminOffer from "../../components/admin/AdminOffer";
import AdminBlog from "../../components/admin/AdminBlog";
import AdminFarewell from "../../components/admin/AdminFarewell";
import AdminLaw from "../../components/admin/AdminLaw";

import HeroContextProvider from "../../contexts/admin/HeroContext";
import HeaderContextProvider from "../../contexts/admin/HeaderContext";
import FutureHereContextProvider from "../../contexts/admin/FutureHereContext";
import BrandsContextProvider from "../../contexts/admin/BrandsContext";
import WhatIsChatGptContextProvider from "../../contexts/admin/WhatIsChatGpt";
import WomanContextProvider from "../../contexts/admin/WomanContext";
import OfferContetxProvider from "../../contexts/admin/OfferContext";
import BlogContextProvider from "../../contexts/admin/BlogContext";
import FarewellContextProvider from "../../contexts/admin/FarewellContext";
import LawContextProvider from "../../contexts/admin/LawContext";

const AdminHome = () => {
  return (
    <div>
      <HeaderContextProvider>
        <AdminHeader />
      </HeaderContextProvider>
      <HeroContextProvider>
        <AdminHero />
      </HeroContextProvider>
      <BrandsContextProvider>
        <AdminBrands />
      </BrandsContextProvider>
      <WhatIsChatGptContextProvider>
        <AdminWhatIsChatGpt />
      </WhatIsChatGptContextProvider>
      <FutureHereContextProvider>
        <AdminFutureHere />
      </FutureHereContextProvider>
      <WomanContextProvider>
        <AdminWoman />
      </WomanContextProvider>
      <OfferContetxProvider>
        <AdminOffer/>
      </OfferContetxProvider>
      <BlogContextProvider>
        <AdminBlog/>
      </BlogContextProvider>
      <FarewellContextProvider>
        <AdminFarewell/>
      </FarewellContextProvider>
      <LawContextProvider>
        <AdminLaw/>
      </LawContextProvider>
    </div>
  );
};

export default AdminHome;

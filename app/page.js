import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Service from "@/components/sections/home1/Service"
import Beneficiaries from "@/components/sections/home1/Beneficiaries"
import Working from "@/components/sections/home1/Working"
import Chooseus from "@/components/sections/home1/Chooseus"
import Masterpiece from "@/components/sections/home1/Masterpiece"
import Clients from "@/components/sections/home1/Clients"
import Pricing from "@/components/sections/home1/Pricing"
import Faq from "@/components/sections/home1/Faq"
import Easier from "@/components/sections/home1/Easier"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Service />
                <Beneficiaries />
                <Working />
                <Chooseus />
                <Masterpiece />
                <Clients />
                <Pricing />
                <Faq />
                <Easier />
            </Layout>
        </>
    )
}
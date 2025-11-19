import { Page } from "@/components/Hero";
import { MerxLayout } from "@/components/merxDash/";
import { Dash } from "@/components/Dashboard";
//import SideNav from "@/components/SideNav";
//import { Header } from "@/components/Header";

export default function Home() {
  return (
    
    <div>
      {/* <Header/> */}
      <Page/>
      {/* <SideNav/> */}
      <MerxLayout >
        <Dash/>
      </MerxLayout>
      
    </div>
  );
}
Home.auth = true;
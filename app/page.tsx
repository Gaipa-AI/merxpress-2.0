import { Page } from "@/components/Hero";
import { MerxLayout } from "@/components/merxDash/";
import { Dash } from "@/components/Dashboard";
//import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    
    <div>
      <Page/>
      {/* <SideNav/> */}
      <MerxLayout >
        <Dash/>
      </MerxLayout>
      
    </div>
  );
}
Home.auth = true;